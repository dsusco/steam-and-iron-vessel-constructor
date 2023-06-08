export default {
  Vessel: {
    A: {
      name: 'Agile',
      prohibitedEccentricities: [
        'A+'
      ]
    },
    'A+': {
      name: 'Agile+',
      prohibitedEccentricities: [
        'A'
      ]
    },
    Amph: {
      name: 'Amphibious',
      requiredVesselTypes: [
        'Aquanef',
        'Aquacraft',
        'Ironclad',
        'Contraptions'
      ],
      prohibitedEccentricities: [
        'ACrl',
        'Sub'
      ]
    },
    ACrl: {
      name: 'Aquacrawler',
      requiredVesselTypes: [
        'Ironclad',
        'Contraptions'
      ],
      prohibitedEccentricities: [
        'Amph',
        'Sub'
      ]
    },
    M: {
      name: 'Mobile',
      prohibitedEccentricities: [
        'M+'
      ]
    },
    'M+': {
      name: 'Mobile+',
      prohibitedEccentricities: [
        'M'
      ]
    },
    RA1: {
      name: 'Reinforced Armor (1)',
      prohibitedEccentricities: [
        'RA2',
        'RA3',
        'RA4',
        'RA5'
      ]
    },
    RA2: {
      name: 'Reinforced Armor (2)',
      prohibitedEccentricities: [
        'RA1',
        'RA3',
        'RA4',
        'RA5'
      ]
    },
    RA3: {
      name: 'Reinforced Armor (3)',
      prohibitedEccentricities: [
        'RA1',
        'RA2',
        'RA4',
        'RA5'
      ]
    },
    RA4: {
      name: 'Reinforced Armor (4)',
      prohibitedEccentricities: [
        'RA1',
        'RA2',
        'RA3',
        'RA5'
      ]
    },
    RA5: {
      name: 'Reinforced Armor (5)',
      prohibitedEccentricities: [
        'RA1',
        'RA2',
        'RA3',
        'RA4'
      ]
    },
    S: {
      name: 'Stable'
    },
    Sub: {
      name: 'Subaqua',
      requiredVesselTypes: [
        'Aquanef',
        'Aquacraft',
        {
          type: 'Ironclad',
          requiredEccentricities: [
            'Amph'
          ]
        },
        {
          type: 'Contraptions',
          requiredEccentricities: [
            'Amph'
          ]
        }
      ],
      prohibitedEccentricities: [
        'ACrl'
      ]
    },
    TBA: {
      name: 'Thick Bottom Armor'
    },
    TRA: {
      name: 'Thick Rear Armor'
    },
    TTA: {
      name: 'Thick Top Armor'
    }
  },
  Weapon: {
    A: {
      name: 'Accurate'
    },
    B: {
      name: 'Bisectional'
    },
    D: {
      name: 'Destructive',
      prohibitedEccentricities: [
        'D+'
      ]
    },
    'D+': {
      name: 'Destructive+',
      prohibitedEccentricities: [
        'D'
      ]
    },
    F: {
      name: 'Forecasting',
      prohibitedEccentricities: [
        'F+'
      ]
    },
    'F+': {
      name: 'Forecasting+',
      prohibitedEccentricities: [
        'F'
      ]
    },
    G: {
      name: 'Gyroscopic',
      prohibitedEccentricities: [
        'G+'
      ]
    },
    'G+': {
      name: 'Gyroscopic+',
      prohibitedEccentricities: [
        'G'
      ]
    },
    I: {
      name: 'Immaterial'
    },
    N: {
      name: 'Natatorial'
    },
    P: {
      name: 'Plunging',
      prohibitedEccentricities: [
        'R'
      ],
      requiredVesselTypes: [
        'Guns'
      ]
    },
    R: {
      name: 'Rising',
      prohibitedEccentricities: [
        'P'
      ],
      requiredVesselTypes: [
        'Guns'
      ]
    },
    U: {
      name: 'Unerring',
      prohibitedEccentricities: [
        'U+'
      ]
    },
    'U+': {
      name: 'Unerring+',
      prohibitedEccentricities: [
        'U'
      ]
    },
    V: {
      name: 'Volitant'
    }
  }
}
