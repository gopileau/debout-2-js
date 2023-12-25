let value = 0
function count() {
    value = value + 1
    let div = document.getElementsByid("countresult");
    let newvalue = document.createTextNode(value);
    div.innerhtml = '';
    div.apprendchild(newvalue);
}

