// 获取具有类名 "down" 的链接元素
var downLinks = document.querySelectorAll(".down");

// 为每个链接添加点击事件监听器
downLinks.forEach(function(link) {javascript:;
    link.addEventListener("click", function(event) {
        // 阻止默认的链接点击行为
        event.preventDefault();

        // 执行跳转操作，替换下面的URL为您想要跳转的URL
        window.location.href = "https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_zce10df696d66b3179d810519_f111dcaeaf8db2fd2_d20250904_m062154_c005_v0501033_t0017_u01756966914120";
    });

});















