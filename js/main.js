// 获取具有类名 "down" 的链接元素
var downLinks = document.querySelectorAll(".down");

// 为每个链接添加点击事件监听器
downLinks.forEach(function(link) {javascript:;
    link.addEventListener("click", function(event) {
        // 阻止默认的链接点击行为
        event.preventDefault();

        // 执行跳转操作，替换下面的URL为您想要跳转的URL
        window.location.href = "https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z64b9c51816b9c17a9a8a0311_f103e16aae95cd40c_d20250901_m092428_c005_v0501035_t0045_u01756718668334";
    });

});





