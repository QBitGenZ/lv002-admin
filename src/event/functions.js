function convertIsoToDdMmYyyy(isoTime) {
    try {
        // Tạo một đối tượng Date từ thời gian ISO 8601
        var dateObj = new Date(isoTime);
        // Lấy các thành phần ngày, tháng và năm từ đối tượng Date
        var day = dateObj.getDate();
        var month = dateObj.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
        var year = dateObj.getFullYear();
        // Định dạng thành chuỗi ngày/tháng/năm
        var formattedTime = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
        return formattedTime;
    } catch (error) {
        // Trả về null nếu có lỗi xảy ra
        return null;
    }
}

function compareTime(startTime, endTime) {
    var currentTime = new Date();
    // Chuyển đổi thời gian truyền vào thành đối tượng Date
    var startDate = new Date(startTime);
    var endDate = new Date(endTime);

    if (currentTime < startDate) {
        return -1; // Chưa bắt đầu
    } else if (currentTime >= startDate && currentTime <= endDate) {
        return 0; // Đang diễn ra
    } else {
        return 1; // Đã kết thúc
    }
}

export {convertIsoToDdMmYyyy, compareTime}