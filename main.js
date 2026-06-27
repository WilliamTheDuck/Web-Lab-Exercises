const searchForm = document.getElementById("searchForm");
const searchInput = document.querySelector(".search--input");

if (searchForm && searchInput) {
    // Hàm gửi dữ liệu (Xử lý kiểm tra độ dài nội dung theo yêu cầu 1c)
    searchForm.addEventListener("submit", (event) => {
        // Chặn form tự động gửi đi để kiểm tra điều kiện trước
        event.preventDefault(); 

        // Lấy dữ liệu và cắt bỏ khoảng trắng thừa 2 đầu
        const query = searchInput.value.trim();

        // Yêu cầu: Nếu nội dung > 0 thì submit, ngược lại thì không gửi
        if (query.length > 0) {
            console.log("Dữ liệu hợp lệ, đang gửi đến timkiem.html...");
            searchForm.submit(); // Thực hiện gửi form bằng phương thức submit()
        } else {
            alert("Yêu cầu nhập nội dung!"); // Thông báo nhẹ cho người dùng biết
        }
    });
}