let li = ["0"]
let re_div = document.getElementById("re_box")

let insert = function (ins) {
    len = li.length - 1
    swi = true
    if (li[len] == "+" || li[len] == "-" || li[len] == "x" || li[len] == "÷" || li[len] == "(" || li[len] == ")" ||li[len].includes(".")==true){
        swi = false
    }
    if (li[len].includes(".")==true){
        swi=true
    }

    if (typeof (ins) == "string") {
        if (swi == true) {
            if (Number(li[len]) == 0 && (ins == "-" || ins == "(") && li.length == 1) {
                li[len] = ins
            }
            if (ins == ".") {
                li[len] += "."
            }
            else if (ins != "(") {
                li.push(ins)
            }
        } else {
            if ((li[len] == "(" && ins == ")") || (li[len] != "(" && li[len] != ")" && ins == ")")||(li[len].includes(".")==true && ins==".")) {
            }
            else if ((li[len] == "(" && (ins == "(" || ins == "-")) || (li[len] == ")" && ins != "(") || (li[len] != "(" && li[len] != ")" && ins == "(")) {
                li.push(ins)
            } else {
                li[len] = ins

            }
        }

    } else {
        if (li.length == 1 && li[len] == "0") {
            li[len] = String(ins)
        }
        else if ((swi == true && li[len] != "(") || (li.length >= 2 && li[len] == "-" && li[len - 1] == "(") || (li.length == 1 && li[len] == "-")||(li[len].includes(".")==true)) {
            console.log(swi, Number(li[len]))
            li[len] += String(ins)
        } else if (li[len] != ")") {
            li.push(String(ins))
        }
    }
    re_div.innerHTML = li.join(" ")
}

let clear2 = function () {
    console.log('h')
    re_div.innerHTML = "0"
    li = ["0"]
}

let re = function (lis) {
    c1 = 0
    c2 = 0
    limit=li.length

    for (let i = 0; i < limit; i++) {
        if (li[i] == "(") {
            c1 += 1
        }
        else if (li[i] == ")") {
            c2 += 1
        }

        if (c1 != c2) {
            console.log(i,li.length)
            re_div.innerHTML = "Error"
            return 0
        }

    }
    contain = 0
    if (lis == 3) {
        lis = li
    }

    while (true) {
        if (lis.includes("(") == true) {
            start_ind = lis.indexOf("(")
            end_ind = lis.indexOf(")")
            li_contain = lis.slice(lis.indexOf("(") + 1, lis.indexOf(")"))
            lis.splice(start_ind, end_ind - start_ind + 1, re(li_contain))
        } else {
            break
        }
    }
    i = 0
    while (i <= li.length) {
        if (lis[i] == "x" || lis[i] == "÷") {
            if (lis[i] == "x") {
                lis.splice(i - 1, (i + 1) - (i - 1) + 1, Number(lis[i - 1]) * Number(lis[i + 1]))
            } else if (lis[i] == "x") {
                lis.splice(i - 1, (i + 1) - (i - 1) + 1, Number(lis[i - 1]) / Number(lis[i + 1]))
            }
        }
        i += 1
    }
    i = 0
    while (i <= li.length) {
        if (lis[i] == "+" || lis[i] == "-") {
            if (lis[i] == "+") {
                lis.splice(i - 1, (i + 1) - (i - 1) + 1, Number(lis[i - 1]) + Number(lis[i + 1]))
            } else if (li[i] == "-") {
                lis.splice(i - 1, (i + 1) - (i - 1) + 1, Number(lis[i - 1]) - Number(lis[i + 1]))
            }
        }
        i += 1
    }
    re_div.innerHTML = lis
    if  (re_div.innerHTML.includes("NaN")==true) {
        re_div.innerHTML = "Error"
        return 0
    }
    else{
    return lis[0]
    }
}

