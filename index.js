var paras = document.querySelectorAll("body>p,ul,ol");
var blocks = [];
var block;
var flag = false;
paras.forEach(p => {
    if (flag) block[0].push(p);
    if (p.innerText.startsWith(":::")) {
        var res = p.innerText.match(/^::: (\w+) ?(.+)?$/);
        if (res) {
            block = [[p], res[1], res[2]];
            flag = true;
        } else {
            blocks.push(block);
            flag = false;
        }
    }
});

function createBlock(ref, class_, name, childs) {
    var title = document.createElement("div");
    var content = document.createElement("div");
    title.className = "box-title " + class_;
    title.innerText = name;
    content.className = "box " + class_;
    content.appendChild(title);
    childs.forEach(c => content.appendChild(c));
    document.body.insertBefore(content, ref);
}

blocks.forEach(b => {
    var ref = b[0].shift();
    b[0].pop().remove();
    createBlock(ref, b[1], b[2], b[0]);
    ref.remove();
});
