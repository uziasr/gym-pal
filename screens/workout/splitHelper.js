import splits from './body'

const splitConversion = (compoundArr) => {
    let muscles = []
    compoundArr.forEach(compound => {
        switch (compound) {
            case 'Arms':
                muscles = [...muscles, 'Triceps', 'Biceps', 'Forearms']
                break
            case 'Legs':
                muscles = [...muscles, 'Quadriceps', 'Hamstrings', 'Calves']
                break
            case 'Push':
                muscles = [...muscles, 'Chest', 'Shoulders', 'Triceps']
                break
            case 'Pull':
                muscles = [...muscles, 'Back', 'Biceps', 'Quadriceps']
                break
            case 'Full body':
                muscles = splits.specific
        }
    })
    return [...new Set(muscles)]
}

export default splitConversion