const { REJECT } = require("../common/constants");
const {_saveQuestionAnswer ,_saveQuestion } = require("../data/_DATA");
describe("_saveQuestion", () => {
    it("should return truthy response for correct parameters", async () => {
        let author = 'sarahedo';
        let optionOneText =  "hire more frontend developers";
        let optionTwoText = "hire more backend developers";
    
        const response = await _saveQuestion({optionOneText, optionTwoText, author});
        expect(response).toBeTruthy();
    });

    it("should return error response with false parameters", async () => {
        const question = {
            id: '6ni6ok3ym7mf1p33lnez',
            author: null,
            timestamp: 1468479767190,
            optionOne: {
              votes: [],
              text: 'hire more frontend developers',
            },
            optionTwo: null
          }
        const response = await _saveQuestion(question).catch(e => e);

        expect(response).toBe("Please provide optionOneText, optionTwoText, and author");
    });
});

describe("_saveQuestionAnswer", () => {
    it("should return truthy response for correct parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "tylermcginnis",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });

    it("should return error response with false parameters", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "tylermcginnis",
            qid: null,
            answer: "optionOne"
        }).catch(e => e);

        expect(response).toBe(REJECT);
    });
});
