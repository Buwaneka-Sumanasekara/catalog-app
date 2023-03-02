import * as CommonUtils from "../src/utils/CommonUtil"


const sampleArray=[
    {id:1,name:"test"},
    {id:2,name:"test2"},
    {id:3,name:"test3"}
]
const sampleArray2=[
    {id:2,name:"test2"},
    {id:3,name:"test3"}
]

describe('Common function tests', () => {
    it('should return array after remove give item', () => {
      const ar=CommonUtils.removeItemFromArray(sampleArray,sampleArray[0],"id")
      expect(ar).toEqual(sampleArray2)
    })
    it('should return true for checkValueExistInArray', () => {
        expect(CommonUtils.checkValueExistInArray(sampleArray[0],sampleArray,"id")).toEqual(true)
    })
    it('should return false for checkValueExistInArray', () => {
        expect(CommonUtils.checkValueExistInArray({id:5,name:"test5"},sampleArray,"id")).toEqual(false)
    })
})
