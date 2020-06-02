import splits from './body'

const specific = splits.specific

const splitConversion = (compound) => {
    const muscles = []
        switch(compound) {
            case 'Arms':
                muscles = [...muscles, 'Triceps', 'Biceps','Forearms']
                break
            case 'Legs':
                muscles = [...muscles, 'Quadriceps', 'Hamstrings','Calves']
                break
            case 'Push':
                muscles = [... muscles, 'Chest', 'Shoulders', 'Triceps' ]
                break
            case 'Pull':
                muscles = [...muscles, 'Back', 'Biceps', 'Quadriceps']
                break
            case 'Full Body':
                muscles = splits.specific
    }
}