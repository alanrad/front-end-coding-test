// We can define a master recuder here later where all other reducers would be combined into one

// e.g.
// const masterReducer = ({ surveyResults }, action) => ({
//     surveyResultsState: surveyResultsReducer(surveyResults, action)
// })

export * from 'app/reducers/surveyResults';
