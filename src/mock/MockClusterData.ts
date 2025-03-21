import { ClusterResponse } from '@/types.ts';

export const mockClusterData: ClusterResponse[] = [
  {
    cluster_id: 'C000',
    name: 'Herzgesundheits-Check',
    description: 'folgt...',
    markers: ['LDL', 'HDL', 'PBNP', 'APOLB', 'CHOL', 'ALBU'],
    price: 99.8,
    currency: 'CHF',
  },
  {
    cluster_id: 'C001',
    name: 'Umfassende Gesundheitsanalyse',
    description: 'folgt...',
    markers: [
      'GPT',
      'APOLB',
      'GOT',
      'CYSC',
      'GFR',
      'E2',
      'GLUN',
      'INSUL',
      'FERRI',
      'FT3',
      'FT4',
      'GGT',
      'HAEMII',
      'HBA1C',
      'HDL',
      'CRP',
      'LDL',
      'BIL',
      'CHOL',
      'GE',
      'TRI',
      'TSH',
      'HCYE',
    ],
    price: 191.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C002',
    name: 'Leber- & Bauchspeicheldrüsenfunktion',
    description: 'folgt...',
    markers: [
      'GOT',
      'GGT',
      'AP',
      'ALB',
      'BIL',
      'BILD',
      'PAM',
      'GPT',
      'CHE',
      'LIPA',
      'LDH',
    ],
    price: 32.1,
    currency: 'CHF',
  },
  {
    cluster_id: 'C003',
    name: 'Diabetes-Check',
    description: 'folgt...',
    markers: ['GLUN', 'HBA1C', 'INSUL'],
    price: 37.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C004',
    name: 'Knochengesundheits-Check',
    description: 'folgt...',
    markers: ['CA', 'AP', 'PO4', 'PTHI', 'VITD'],
    price: 88.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C005',
    name: 'Prostata-Check',
    description: 'folgt...',
    markers: ['PSA', 'FPSA'],
    price: 21.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C006',
    name: 'Elektrolyt- & Metallstatus',
    description: 'folgt...',
    markers: ['CA', 'CL', 'FE', 'K', 'MG', 'NA', 'PO4'],
    price: 23.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C007',
    name: 'Enzym-Check',
    description: 'folgt...',
    markers: [
      'AP',
      'AMYL',
      'CK',
      'GGT',
      'GOT',
      'GPT',
      'LDH',
      'LIPA',
      'PAM',
      'CHE',
    ],
    price: 28.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C008',
    name: 'Nierenfunktions-Check',
    description: 'folgt...',
    markers: [
      'NA',
      'K',
      'CA',
      'KREA',
      'HAEMV',
      'CL',
      'PO4',
      'HST',
      'HS',
      'ALBU',
    ],
    price: 43.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C009',
    name: 'Haarausfallanalyse',
    description: 'folgt...',
    markers: [
      'HAEMV',
      'FERRI',
      'VITH',
      'SE',
      'ZN',
      'LH',
      'FSH',
      'TSH',
      'E2',
      'GT',
      'ANDRO',
      'DS',
      'SHBG',
      'CORT08',
      'VITD',
    ],
    price: 435,
    currency: 'CHF',
  },
  {
    cluster_id: 'C010',
    name: 'Spurenelemente-Check',
    description: 'folgt...',
    markers: ['ZN', 'SE'],
    price: 134.1,
    currency: 'CHF',
  },
  {
    cluster_id: 'C011',
    name: 'Sportchampion: Deine Leistungs- und Erholungsanalyse',
    description: 'folgt...',
    markers: [
      'KREA',
      'MG',
      'HST',
      'HS',
      'GE',
      'FERRI',
      'CK',
      'TSH',
      'CRP',
      'CKMBM',
      'MYO',
      'GT',
      'LAKT',
      'IGF1',
      'TRANS',
    ],
    price: 172.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C012',
    name: 'Stress & Alters-Check',
    description: 'folgt...',
    markers: [
      'CORT08',
      'ACTH',
      'DHEA',
      'HISTA',
      'TSH',
      'T3',
      'T4',
      'LDH',
      'SHBG',
      'IL6',
      'HBA1C',
      'LIPKL',
    ],
    price: 342.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C013',
    name: 'Allergie & Asthma Check',
    description: 'folgt...',
    markers: ['IGE', 'HAEMV', 'HISTA', 'ECP', 'TRYPTA'],
    price: 165.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C014',
    name: 'Fruchtbarkeits-Check',
    description: 'folgt...',
    markers: [
      'HBA1C',
      'HAEMV',
      'GLUN',
      'FERRI',
      'FOLS',
      'VITB12',
      'LH',
      'FSH',
      'TSH',
      'E2',
      'PROG',
      'AMH',
      'SHBG',
      'PROL',
      'FT',
    ],
    price: 277.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C015',
    name: 'Entzündungs-Check',
    description: 'folgt...',
    markers: ['HAEMV', 'CRP', 'BKS', 'PROCAL', 'FIBR', 'RF'],
    price: 117.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C016',
    name: 'Stoffwechselanalyse',
    description: 'folgt...',
    markers: [
      'ALB',
      'BIL',
      'BILD',
      'GLUN',
      'HS',
      'HST',
      'HBA1C',
      'KREA',
      'GE',
      'HCYE',
      'CYSC',
      'CPEP',
      'TSH',
    ],
    price: 123.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C017',
    name: 'Gesundheitsnavigator: Deine Basisgesundheit im Überblick',
    description: 'folgt...',
    markers: [
      'NA',
      'K',
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'ALB',
      'LDH',
      'HAEMV',
      'PO4',
      'MG',
      'HST',
      'HS',
      'GLUN',
      'CHOL',
      'FERRI',
      'VITB12',
      'TSH',
      'CRP',
      'GE',
      'PAM',
      'LIPA',
      'GPT',
      'AP',
      'BIL',
    ],
    price: 116.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C018',
    name: 'Vegi & Vegan Ernährungs-Check',
    description: 'folgt...',
    markers: [
      'CA',
      'HAEMV',
      'FE',
      'TRANS',
      'FERRI',
      'FOLS',
      'VITB12',
      'HOLTC',
      'VITD',
      'TRANSS',
    ],
    price: 174.8,
    currency: 'CHF',
  },
  {
    cluster_id: 'C019',
    name: 'Vitamin D3 Check',
    description: 'folgt...',
    markers: ['VITD'],
    price: 47.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C020',
    name: 'Vitamin B12 Check',
    description: 'folgt...',
    markers: ['VITB12', 'HOLTC'],
    price: 77.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C021',
    name: 'Vollständiger Vitamin-Check',
    description: 'folgt...',
    markers: ['FOLS', 'VITB1', 'VITB6', 'VITB12', 'VITD'],
    price: 211.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C022',
    name: 'Gesundheitsvorsorge Frauen',
    description: 'folgt...',
    markers: [
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'HBA1C',
      'HAEMV',
      'HS',
      'GLUN',
      'CHOL',
      'TRI',
      'HDL',
      'LDL',
      'FERRI',
      'VITB12',
      'PBNP',
      'PAM',
      'AMYL',
      'GPT',
      'TSH',
      'E2',
      'PROG',
      'GT',
      'VITD',
      'ALBU',
      'LIPA',
    ],
    price: 277.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C023',
    name: 'Gesundheitsvorsorge Männer',
    description: 'folgt...',
    markers: [
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'HBA1C',
      'HAEMV',
      'HS',
      'GLUN',
      'CHOL',
      'TRI',
      'HDL',
      'LDL',
      'FERRI',
      'VITB12',
      'PBNP',
      'PAM',
      'AMYL',
      'GPT',
      'TSH',
      'GT',
      'VITD',
      'PSA',
      'ALBU',
      'LIPA',
    ],
    price: 253.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C024',
    name: 'Schilddrüsenanalyse',
    description: 'folgt...',
    markers: ['FT3', 'FT4', 'TSH'],
    price: 25.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C025',
    name: 'Schwermetall-Check',
    description: 'folgt...',
    markers: ['PB', 'HG'],
    price: 229.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C026',
    name: 'Eisenstatus',
    description: 'folgt...',
    markers: ['FE', 'FERRI', 'TRANS', 'TRANSS', 'HAEMV', 'CRP'],
    price: 37.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C027',
    name: 'Anämie-Check',
    description: 'folgt...',
    markers: ['HAEMV', 'FERRI', 'FOLS', 'VITB12', 'CRP'],
    price: 63.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C028',
    name: 'Lipidprofil-Check',
    description: 'folgt...',
    markers: ['CHOL', 'TRI', 'HDL', 'LDL'],
    price: 11.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C029',
    name: 'Männerpower-Hormonprofil',
    description: 'folgt...',
    markers: ['LH', 'FSH', 'TSH', 'GT', 'FT', 'ALB', 'E2', 'DS', 'SHBG'],
    price: 160.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C030',
    name: 'Frauenpower-Hormonprofil',
    description: 'folgt...',
    markers: ['LH', 'FSH', 'TSH', 'GT', 'E2', 'PROL', 'PROG'],
    price: 102.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C031',
    name: 'Energieboost: Ursachen von Müdigkeit aufdecken',
    description: 'folgt...',
    markers: ['CRP', 'FERRI', 'HAEMV', 'TSH', 'VITB12', 'VITD'],
    price: 107.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C032',
    name: 'Energieboost: Ursachen von Müdigkeit aufdecken DELUXE',
    description: 'folgt...',
    markers: [
      'CRP',
      'FERRI',
      'HAEMV',
      'TSH',
      'VITB12',
      'VITD',
      'FT3',
      'FT4',
      'TRANS',
      'HSO3IE',
      'HCYE',
      'CORT08',
      'HBA1C',
      'ELEK',
    ],
    price: 294.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C033',
    name: 'Umfassender Ernährungs-Check',
    description: 'folgt...',
    markers: [
      'ALB',
      'HAEMV',
      'MG',
      'HS',
      'GLUN',
      'CHOL',
      'GE',
      'FERRI',
      'FOLS',
      'VITB12',
      'CRP',
      'ZN',
      'TRANS',
    ],
    price: 128.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C034',
    name: 'Intimgesundheits-Check',
    description: 'folgt...',
    markers: ['LUESS', 'HIVC', 'AHC'],
    price: 112.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C035',
    name: 'Blutgruppenprofil',
    description: 'folgt...',
    markers: ['BLG'],
    price: 49.9,
    currency: 'CHF',
  },
  {
    cluster_id: 'C114',
    name: 'Herzgesundheits-Check',
    description: 'folgt...',
    markers: ['LDL', 'HDL', 'PBNP', 'APOLB', 'CHOL', 'ALBU'],
    price: 99.8,
    currency: 'CHF',
  },
  {
    cluster_id: 'C115',
    name: 'Umfassende Gesundheitsanalyse',
    description: 'folgt...',
    markers: [
      'GPT',
      'APOLB',
      'GOT',
      'CYSC',
      'GFR',
      'E2',
      'GLUN',
      'INSUL',
      'FERRI',
      'FT3',
      'FT4',
      'GGT',
      'HAEMII',
      'HBA1C',
      'HDL',
      'CRP',
      'LDL',
      'BIL',
      'CHOL',
      'GE',
      'TRI',
      'TSH',
      'HCYE',
    ],
    price: 191.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C116',
    name: 'Leber- & Bauchspeicheldrüsenfunktion',
    description: 'folgt...',
    markers: [
      'GOT',
      'GGT',
      'AP',
      'ALB',
      'BIL',
      'BILD',
      'PAM',
      'GPT',
      'CHE',
      'LIPA',
      'LDH',
    ],
    price: 32.1,
    currency: 'CHF',
  },
  {
    cluster_id: 'C117',
    name: 'Diabetes-Check',
    description: 'folgt...',
    markers: ['GLUN', 'HBA1C', 'INSUL'],
    price: 37.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C118',
    name: 'Knochengesundheits-Check',
    description: 'folgt...',
    markers: ['CA', 'AP', 'PO4', 'PTHI', 'VITD'],
    price: 88.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C119',
    name: 'Prostata-Check',
    description: 'folgt...',
    markers: ['PSA', 'FPSA'],
    price: 21.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C120',
    name: 'Elektrolyt- & Metallstatus',
    description: 'folgt...',
    markers: ['CA', 'CL', 'FE', 'K', 'MG', 'NA', 'PO4'],
    price: 23.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C121',
    name: 'Enzym-Check',
    description: 'folgt...',
    markers: [
      'AP',
      'AMYL',
      'CK',
      'GGT',
      'GOT',
      'GPT',
      'LDH',
      'LIPA',
      'PAM',
      'CHE',
    ],
    price: 28.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C122',
    name: 'Nierenfunktions-Check',
    description: 'folgt...',
    markers: [
      'NA',
      'K',
      'CA',
      'KREA',
      'HAEMV',
      'CL',
      'PO4',
      'HST',
      'HS',
      'ALBU',
    ],
    price: 43.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C123',
    name: 'Haarausfallanalyse',
    description: 'folgt...',
    markers: [
      'HAEMV',
      'FERRI',
      'VITH',
      'SE',
      'ZN',
      'LH',
      'FSH',
      'TSH',
      'E2',
      'GT',
      'ANDRO',
      'DS',
      'SHBG',
      'CORT08',
      'VITD',
    ],
    price: 435,
    currency: 'CHF',
  },
  {
    cluster_id: 'C124',
    name: 'Spurenelemente-Check',
    description: 'folgt...',
    markers: ['ZN', 'SE'],
    price: 134.1,
    currency: 'CHF',
  },
  {
    cluster_id: 'C125',
    name: 'Sportchampion: Deine Leistungs- und Erholungsanalyse',
    description: 'folgt...',
    markers: [
      'KREA',
      'MG',
      'HST',
      'HS',
      'GE',
      'FERRI',
      'CK',
      'TSH',
      'CRP',
      'CKMBM',
      'MYO',
      'GT',
      'LAKT',
      'IGF1',
      'TRANS',
    ],
    price: 172.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C126',
    name: 'Stress & Alters-Check',
    description: 'folgt...',
    markers: [
      'CORT08',
      'ACTH',
      'DHEA',
      'HISTA',
      'TSH',
      'T3',
      'T4',
      'LDH',
      'SHBG',
      'IL6',
      'HBA1C',
      'LIPKL',
    ],
    price: 342.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C127',
    name: 'Allergie & Asthma Check',
    description: 'folgt...',
    markers: ['IGE', 'HAEMV', 'HISTA', 'ECP', 'TRYPTA'],
    price: 165.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C128',
    name: 'Fruchtbarkeits-Check',
    description: 'folgt...',
    markers: [
      'HBA1C',
      'HAEMV',
      'GLUN',
      'FERRI',
      'FOLS',
      'VITB12',
      'LH',
      'FSH',
      'TSH',
      'E2',
      'PROG',
      'AMH',
      'SHBG',
      'PROL',
      'FT',
    ],
    price: 277.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C129',
    name: 'Entzündungs-Check',
    description: 'folgt...',
    markers: ['HAEMV', 'CRP', 'BKS', 'PROCAL', 'FIBR', 'RF'],
    price: 117.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C130',
    name: 'Stoffwechselanalyse',
    description: 'folgt...',
    markers: [
      'ALB',
      'BIL',
      'BILD',
      'GLUN',
      'HS',
      'HST',
      'HBA1C',
      'KREA',
      'GE',
      'HCYE',
      'CYSC',
      'CPEP',
      'TSH',
    ],
    price: 123.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C131',
    name: 'Gesundheitsnavigator: Deine Basisgesundheit im Überblick',
    description: 'folgt...',
    markers: [
      'NA',
      'K',
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'ALB',
      'LDH',
      'HAEMV',
      'PO4',
      'MG',
      'HST',
      'HS',
      'GLUN',
      'CHOL',
      'FERRI',
      'VITB12',
      'TSH',
      'CRP',
      'GE',
      'PAM',
      'LIPA',
      'GPT',
      'AP',
      'BIL',
    ],
    price: 116.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C132',
    name: 'Vegi & Vegan Ernährungs-Check',
    description: 'folgt...',
    markers: [
      'CA',
      'HAEMV',
      'FE',
      'TRANS',
      'FERRI',
      'FOLS',
      'VITB12',
      'HOLTC',
      'VITD',
      'TRANSS',
    ],
    price: 174.8,
    currency: 'CHF',
  },
  {
    cluster_id: 'C133',
    name: 'Vitamin D3 Check',
    description: 'folgt...',
    markers: ['VITD'],
    price: 47.7,
    currency: 'CHF',
  },
  {
    cluster_id: 'C134',
    name: 'Vitamin B12 Check',
    description: 'folgt...',
    markers: ['VITB12', 'HOLTC'],
    price: 77.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C135',
    name: 'Vollständiger Vitamin-Check',
    description: 'folgt...',
    markers: ['FOLS', 'VITB1', 'VITB6', 'VITB12', 'VITD'],
    price: 211.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C136',
    name: 'Gesundheitsvorsorge Frauen',
    description: 'folgt...',
    markers: [
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'HBA1C',
      'HAEMV',
      'HS',
      'GLUN',
      'CHOL',
      'TRI',
      'HDL',
      'LDL',
      'FERRI',
      'VITB12',
      'PBNP',
      'PAM',
      'AMYL',
      'GPT',
      'TSH',
      'E2',
      'PROG',
      'GT',
      'VITD',
      'ALBU',
      'LIPA',
    ],
    price: 277.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C137',
    name: 'Gesundheitsvorsorge Männer',
    description: 'folgt...',
    markers: [
      'CA',
      'KREA',
      'GOT',
      'GGT',
      'HBA1C',
      'HAEMV',
      'HS',
      'GLUN',
      'CHOL',
      'TRI',
      'HDL',
      'LDL',
      'FERRI',
      'VITB12',
      'PBNP',
      'PAM',
      'AMYL',
      'GPT',
      'TSH',
      'GT',
      'VITD',
      'PSA',
      'ALBU',
      'LIPA',
    ],
    price: 253.4,
    currency: 'CHF',
  },
  {
    cluster_id: 'C138',
    name: 'Schilddrüsenanalyse',
    description: 'folgt...',
    markers: ['FT3', 'FT4', 'TSH'],
    price: 25.6,
    currency: 'CHF',
  },
  {
    cluster_id: 'C139',
    name: 'Schwermetall-Check',
    description: 'folgt...',
    markers: ['PB', 'HG'],
    price: 229.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C140',
    name: 'Eisenstatus',
    description: 'folgt...',
    markers: ['FE', 'FERRI', 'TRANS', 'TRANSS', 'HAEMV', 'CRP'],
    price: 37.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C141',
    name: 'Anämie-Check',
    description: 'folgt...',
    markers: ['HAEMV', 'FERRI', 'FOLS', 'VITB12', 'CRP'],
    price: 63.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C142',
    name: 'Lipidprofil-Check',
    description: 'folgt...',
    markers: ['CHOL', 'TRI', 'HDL', 'LDL'],
    price: 11.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C143',
    name: 'Männerpower-Hormonprofil',
    description: 'folgt...',
    markers: ['LH', 'FSH', 'TSH', 'GT', 'FT', 'ALB', 'E2', 'DS', 'SHBG'],
    price: 160.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C144',
    name: 'Frauenpower-Hormonprofil',
    description: 'folgt...',
    markers: ['LH', 'FSH', 'TSH', 'GT', 'E2', 'PROL', 'PROG'],
    price: 102.3,
    currency: 'CHF',
  },
  {
    cluster_id: 'C145',
    name: 'Energieboost: Ursachen von Müdigkeit aufdecken',
    description: 'folgt...',
    markers: ['CRP', 'FERRI', 'HAEMV', 'TSH', 'VITB12', 'VITD'],
    price: 107.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C146',
    name: 'Energieboost: Ursachen von Müdigkeit aufdecken DELUXE',
    description: 'folgt...',
    markers: [
      'CRP',
      'FERRI',
      'HAEMV',
      'TSH',
      'VITB12',
      'VITD',
      'FT3',
      'FT4',
      'TRANS',
      'HSO3IE',
      'HCYE',
      'CORT08',
      'HBA1C',
      'ELEK',
    ],
    price: 294.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C147',
    name: 'Umfassender Ernährungs-Check',
    description: 'folgt...',
    markers: [
      'ALB',
      'HAEMV',
      'MG',
      'HS',
      'GLUN',
      'CHOL',
      'GE',
      'FERRI',
      'FOLS',
      'VITB12',
      'CRP',
      'ZN',
      'TRANS',
    ],
    price: 128.2,
    currency: 'CHF',
  },
  {
    cluster_id: 'C148',
    name: 'Intimgesundheits-Check',
    description: 'folgt...',
    markers: ['LUESS', 'HIVC', 'AHC'],
    price: 112.5,
    currency: 'CHF',
  },
  {
    cluster_id: 'C149',
    name: 'Blutgruppenprofil',
    description: 'folgt...',
    markers: ['BLG'],
    price: 49.9,
    currency: 'CHF',
  },
];
