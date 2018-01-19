const selectors = require('../test_data/selectors')
module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },
    //inputting a string of numbers to test the split feature
    'evensAndOdds': browser => {
        browser
            .setValue("input[name='evenOddInput']", "1,4,9,8,9,3,9,2,3")
            .click("button[name='evenOddButton']")
            .expect.element("span[name='evenResults']").text.to.contain('4,8,2')
        browser
            .expect.element("span[name='oddResults']").text.to.contain('1,9,9,3,9,3')
    },
    //Input a title, it should result in all who have that title showing in results
    'filterObject': browser => {
        browser
            .setValue("input[name='objectFilterInput']", "title")
            .click("button[name='objectFilterButton']")
            .expect.element("span[name='objectFilterResults']").text.to.contain('Jimmy Joe', 'Carly Armstrong')
    },
    //Input one letter to see if it will result in all names that contain that letter, appearing in results
    'filterString': browser => {
        browser
            .setValue("input[id='nameFilterInput']", "r")
            .click("button[id='nameFilterButton']")
            .expect.element("span[name='nameFilterResults").text.to.contain("Tyler", "Jennifer", "Mark")
    },
    //Enter a word to get true or false
    'palindrome': browser => {
        browser
            .setValue("input[name='palindromeInput']", "madam")
            .click("button[name='palindromeButton']")
            .expect.element("span[name='palindromeResults']").text.to.contain("true")
    },
    //enter two numbers to see if it results in the correct sum
    'sum': browser => {
        browser
            .setValue("input[name='sumInput1']", "23")
            .setValue("input[name='sumInput2']", "31")
            .click("button[name='sumButton']")
            .expect.element("span[name='sumResults']").text.to.contain("54")
    }
}
