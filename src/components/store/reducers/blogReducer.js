const initState = {
    blogs: [
        { imgUrl:'http://file.hstatic.net/1000075078/article/dem_hoi_pha_co_web_88aab2c74bd24f78a97f26e1ad396a55_41420a1ba7b049a892b0dca25ce98761_grande.jpg', 
        title: 'ĐÊM HỘI PHÁ CỖ: NHÀ TA KỂ CÂU CHUYỆN TRĂNG TRUNG THU MỖI NĂM', 
        content: 'Trung Thu mỗi năm mỗi khác và không còn vẹn tròn như xưa, nhất là với một năm nhiều biến động và âu lo này thì ý nghĩa đêm trăng...' },
        
        { imgUrl:'http://file.hstatic.net/1000075078/article/thumbnail_for_website_-_1920x768_ce9fe5f7becf42cea01c0e8dddbd8e11_grande.jpg', 
        title: 'CÙNG NHÀ THƯỞNG THỨC PHIM THE TALE OF CUỘI 2020 VÀ ĐÓN MÙA TRĂNG SUNG TÚC', 
        content: 'Thời gian trôi qua, mỗi năm một khác, câu chuyện Trung Thu cũng vì thế mà khó được trọn vẹn như xưa, đặc biệt trong những ngày nhiều biến động,...' },
        
        { imgUrl:'http://file.hstatic.net/1000075078/article/banner_trang_chu1200x450_166da670f92148e496a55ff9fb462fa3_grande.jpg',
        title: 'GÓI TIẾT KIỆM DÀNH CHO NGƯỜI YÊU TRÀ VÀ CÀ PHÊ - TIẾT KIỆM ĐẾN 160K',
        content: 'Cùng Nhà khám phá Gói Tiết Kiệm "phiên bản nâng cấp" tại app The Coffee House để thưởng thức món yêu thích và tiết kiệm đến 160.000đ nha!Nhà hiểu rằng, một ngày...' },
        
        { imgUrl:'http://file.hstatic.net/1000075078/article/banner_blog-tch-p1_1200x450_d94d03cc8db547d88e6906342f66491c_grande.jpg',
        title: 'CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT: BẠN CÓ THÊM 3 THÁNG ĐỔI BEAN NHẬN ƯU ĐÃI',
        content: 'Chương trình khách hàng thân thiết - The Coffee House Rewards cập nhật thêm nhiều ưu đãi hấp dẫn, đa tiện ích: giải trí, mua sắm, ăn uống,... Đặc biệt,...' }
    ]
}

const blogReducers = (state = initState, action) => {
    return state
}

export default blogReducers