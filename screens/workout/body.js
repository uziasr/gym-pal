const commonSplit = [
    'chest', 'arms', 'back', 'legs','shoulders'
]
const simpleSplit = [
    'push', 'pull', 'legs', 'full body'
]
const specificSplit = ['Chest',
'Back', 'Shoulders', 'Trapezius',
'Triceps', 'Biceps','Forearms',
'Quadriceps', 'Hamstrings','Calves','Abs']
    // this will eventually come from the backend where it will be it will have a grand schema design with body parts etc


const splits = {
    simple: simpleSplit,
    common: commonSplit,
    specific: specificSplit
}

export default splits