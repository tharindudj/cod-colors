(function () {
    const vscode = acquireVsCodeApi();
new ClipboardJS('.btn');
var color = "#3FB764";

$("#t1").css("color", color);
$("#t2").css("color", color);

var r = round(hexToRGB(color)[0] / 255);
var g = round(hexToRGB(color)[1] / 255);
var b = round(hexToRGB(color)[2] / 255);
var colorCode = "(" + r + ", " + g + ", " + b + ");";
// eslint-disable-next-line no-useless-concat
var colorCodeMenu = r + " " + g + " " + b + " " + " 1";
$("#in1").val(colorCode);
$("#in2").val("color = " + colorCode);
$("#in3").val("glowcolor = " + colorCode);
$("#in4").val(colorCodeMenu);
$("#t1").css("color", color);
$("#t2").css("color", color);
function hexToRGB(h) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
    } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
    }

    var arr = [
        + r, + g, + b
    ];
    return arr;
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}



const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function handleClick(event) {
        vscode.postMessage({
            action: POST_MESSAGE_ACTION.SHOW_WARNING_LOG,
            data: {
                message: `Copied to clipboard`
            }
    });
  });
});


}());

