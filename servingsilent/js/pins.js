$(function() {
    ! function(e, l, n, t, a) {
        $("head").append("<style></style>");
        var d = "containerOuter_" + l.slice(1),
            r = "containerInner_" + l.slice(1) + "_",
            o = l.charAt(0);
        if ("." == o) var s = 'class="' + l.slice(1) + '"';
        else "#" == o && (s = 'id="' + l.slice(1) + '"');
        var c = a.toString();
        "m" == c.slice(-1) || "x" == c.slice(-1) || "%" == c.slice(-1) || (c += "px"), 0 != t[0] && t.unshift(0), t.push(1e6), $(e).html("");
        var h = "",
            p = "";
        $(l).css("display", "none");
        var v = n.slice(-1)[0];
        $("iframe").removeAttr("width").removeAttr("height");
        var m = $(l).length;
        for (h += '<div class="' + d + '">', i = 1; i <= v; i++) {
            for (i >= 2 && (h += '<div class="innerSpace"></div>'), h += '<div class="' + r + i + '" >', x = 0; x < m; x++) {
                var f = $(l + ":eq(" + x + ")").html();
                f.includes("iframe") ? h += '<div class="iframeContainer" ' + s + ">" + f + "</div>" : h += "<div " + s + ">" + f + "</div>"
            }
            h += "</div>"
        }
        h += "</div>", $(h).appendTo(e), n.forEach(function(l, a) {
            p += "@media screen and (min-width:" + t[a] + "px) {";
            var d = 100 / n[a];
            for (i = 1; i <= v; i++) {
                if (i <= l)
                    for (i > 1 && (p += "." + r + i + "{display:table-cell; vertical-align: top; }"), p += "." + r + i + "{display:table-cell; vertical-align: top; width:" + d + "%;}", p += "." + r + i + " img{max-width:100%;}", ii = 1; ii <= v; ii++) ii == i ? p += "." + r + ii + " > div:nth-child(" + l + "n+" + i + "){display:block;margin-bottom:" + c + "  }" : p += "." + r + ii + " > div:nth-child(" + l + "n+" + i + "){display:none;}";
                else p += "." + r + i + "{display:none;}";
                p += "." + r + i + " div:last-child {margin-bottom:0px;}"
            }
            if (l <= 1) p += e + " .innerSpace {display:none;}";
            else
                for (y = 1; y <= l; y++) y < l ? p += e + " .innerSpace:nth-child(" + 2 * y + "){display:table-cell;padding-left:" + c + "}" : p += e + ".innerSpace:nth-child(" + 2 * y + "){display:none;}";
            p += "}"
        }), p += "." + d + " {display:table;width:100%;}", p += "." + d + " img {width:100%; display: block; }", p += "." + d + " img {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;  box-sizing: border-box;}", p += ".iframeContainer{position: relative;width: 100%;height: 100%;}", p += "iframe { display:block; top: 0;left: 0;width: 100%; }", document.querySelector("style").textContent += p, n.length = 0, t.length = 0
    }("#Target", ".SourcePins", [1, 2, 3, 4, 5], [0, 350, 500, 800, 1200], 8)
});
$(".items").html($(".items .SourcePins").sort(function() {
    return Math.random() - 0.5;
}));