module.exports = function toReadable (number) {
    let underTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
                   'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 
                   'eighteen', 'nineteen']
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    // 17
    if (number < 20) {
        return underTwenty[number]
    } 
    // 77
    else if (number < 100) {
        // 70
        if(number%10===0) {return tens[number/10-1]}
        let element1 = Math.floor(number/10)
        let element2 = number%10
        return tens[element1-1]+' '+underTwenty[element2]
    } 

    else if (number < 1000) {

        // 700
        if(number%100===0) {return underTwenty[number/100]+' hundred'}

        let element1 = Math.floor(number/100)
        let result1 = underTwenty[element1]

        let element2 = Math.floor(number%100/10)
        let result2 = tens[element2-1]

        let element3 = number%10
        let result3 = underTwenty[element3]

        // 702
        if(element2===0){
            let result2 = ''
            let result3 = underTwenty[element3]
            return result1 + ' hundred ' + result2 + result3
        }
        // 712
        if(element2===1){
            let result2 = underTwenty[Math.floor(number%100)]
            return result1 + ' hundred ' + result2 
        }
        // 770
        if(element3===0){
            let result3 = ''
            return result1 + ' hundred ' + result2 + result3
        }
        
        return result1 + ' hundred ' + result2 + ' ' + result3
    } 
}
