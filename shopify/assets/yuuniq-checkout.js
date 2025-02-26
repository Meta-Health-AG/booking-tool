document.addEventListener("DOMContentLoaded", function () {
    // Basis-URL für die Weiterleitung
    const redirectBaseUrl = "http://localhost:5173/entry";

    // Funktion zum Abrufen des aktuellen Warenkorbs
    async function fetchCart() {
        try {
            const response = await fetch("/cart.js");
            if (!response.ok) throw new Error("Netzwerkantwort war nicht ok");
            return await response.json();
        } catch (error) {
            console.error("Fehler beim Abrufen des Warenkorbs:", error);
            return null;
        }
    }

    // Funktion zum Hinzufügen eines Produkts zum Warenkorb
    async function addProductToCart(variantId, quantity = 1) {
        try {
            const response = await fetch("/cart/add.js", {
                method: "POST", headers: {
                    "Content-Type": "application/json", "X-Requested-With": "XMLHttpRequest",
                }, body: JSON.stringify({id: variantId, quantity: quantity}),
            });
            if (!response.ok) throw new Error("Netzwerkantwort war nicht ok");
            return await response.json();
        } catch (error) {
            console.error("Fehler beim Hinzufügen zum Warenkorb:", error);
            return null;
        }
    }

    // Funktion zum Aktualisieren der Warenkorb-Anzeige im Header
    function updateCartIcon(itemCount) {
        const cartIconBubble = document.getElementById("cart-icon-bubble");
        if (cartIconBubble) {
            const cartCountBubble = cartIconBubble.querySelector(".cart-count-bubble");
            if (cartCountBubble) {
                if (itemCount > 0) {
                    cartCountBubble.innerHTML = `<span aria-hidden="true">${itemCount}</span><span class="visually-hidden">${itemCount} Artikel im Warenkorb</span>`;
                    cartCountBubble.style.display = "block";
                } else {
                    cartCountBubble.style.display = "none";
                }
            }
        }
    }

    // Event-Listener für den "yuuniq-checkout"-Button
    const yuuniqCheckoutButton = document.getElementById("yuuniq-checkout");
    if (yuuniqCheckoutButton) {
        yuuniqCheckoutButton.addEventListener("click", async function (event) {
            event.preventDefault();

            // Abrufen des versteckten Eingabefelds mit der ID 'product-sku'
            const productSkuInput = document.getElementById("product-sku");
            if (!productSkuInput) {
                console.warn("Produkt-SKU-Eingabefeld nicht gefunden.");
                return;
            }

            // Abrufen der Produkt-ID und -SKU
            const variantId = productSkuInput.getAttribute("data-variant-id");
            const quantity = 1; // Standardmenge auf 1 gesetzt

            if (!variantId) {
                console.warn("Keine Varianten-ID gefunden.");
                return;
            }

            // Aktuellen Warenkorb abrufen
            const cart = await fetchCart();
            if (!cart) return;

            // Überprüfen, ob das Produkt bereits im Warenkorb ist
            const productInCart = cart.items.find((item) => item.variant_id === variantId);

            if (productInCart) {
                console.log("Produkt ist bereits im Warenkorb.");
            } else {
                // Produkt zum Warenkorb hinzufügen
                const addResponse = await addProductToCart(variantId, quantity);
                if (addResponse) {
                    console.log("Produkt wurde zum Warenkorb hinzugefügt:", addResponse);
                    updateCartIcon(cart.item_count + quantity);
                }
            }

            // Aktualisierten Warenkorb abrufen
            const updatedCart = await fetchCart();
            if (!updatedCart) return;

            // SKUs aus dem aktualisierten Warenkorb abrufen
            const skus = updatedCart.items.map((item) => item.sku || "X999");
            const queryParams = new URLSearchParams({skus: skus.join(",")});

            // Umleitung zur gewünschten URL mit den SKUs als Parameter
            window.location.href = `${redirectBaseUrl}?${queryParams.toString()}`;
        });
    }

    // Event-Listener für den "checkout"-Button
    const checkoutButton = document.getElementById("checkout");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", async function (event) {
            event.preventDefault();

            // Aktuellen Warenkorb abrufen
            const cart = await fetchCart();
            if (!cart) return;

            // SKUs aus dem Warenkorb extrahieren
            const skus = cart.items.map((item) => item.sku || "X999");
            const queryParams = new URLSearchParams({skus: skus.join(",")});

            // Weiterleitung zur gewünschten URL mit den SKUs als Parameter
            window.location.href = `${redirectBaseUrl}?${queryParams.toString()}`;
        });
    }
});
