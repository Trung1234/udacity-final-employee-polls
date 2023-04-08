const { REJECT } = require("../common/constants");
const {_saveQuestionAnswer} = require("../data/_DATA");
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
