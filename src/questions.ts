import { Question } from './types';

export const QUESTIONS: Question[] = [
  // PHẦN 1: KIẾN THỨC CƠ BẢN
  {
    id: 1,
    text: "Một ngày nên đánh răng mấy lần?",
    options: ["1 lần", "2 lần", "3 lần", "Không cần đánh răng"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Đánh răng 2 lần mỗi ngày (sáng và tối) là tiêu chuẩn vàng để loại bỏ mảng bám hiệu quả."
  },
  {
    id: 2,
    text: "Nên đánh răng vào thời điểm nào là tốt nhất?",
    options: ["Chỉ sau khi ăn sáng", "Chỉ trước khi đi ngủ", "Cả sau ăn & trước ngủ", "Khi nào thấy răng bẩn"],
    correctAnswer: 2,
    category: "Kiến thức cơ bản",
    explanation: "Đánh răng sau khi ăn giúp loại bỏ thức ăn thừa, và trước khi ngủ giúp bảo vệ răng suốt đêm dài."
  },
  {
    id: 3,
    text: "Đánh răng quá mạnh có tốt không?",
    options: ["Có, giúp răng sạch hơn", "Sai, làm mòn men răng và tổn thương nướu"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Lực quá mạnh không làm răng sạch hơn mà còn gây mòn cổ răng và tụt nướu."
  },
  {
    id: 4,
    text: "Trẻ em có cần đánh răng không?",
    options: ["Không cần, răng sữa sẽ rụng", "Đúng, cần đánh răng ngay khi mọc răng"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Răng sữa đóng vai trò quan trọng trong việc định hướng răng vĩnh viễn, nên cần được chăm sóc sớm."
  },
  {
    id: 5,
    text: "Bàn chải nên thay sau bao lâu?",
    options: ["1 tháng", "3 tháng", "6 tháng", "Khi nào bàn chải hỏng"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Sau 3 tháng, lông bàn chải thường bị xơ và chứa nhiều vi khuẩn, không còn hiệu quả làm sạch."
  },
  {
    id: 6,
    text: "Đánh răng xong có cần súc miệng lại không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Kiến thức cơ bản",
    explanation: "Súc miệng lại giúp loại bỏ hoàn toàn kem đánh răng thừa và các mảng bám đã được chải sạch."
  },
  {
    id: 7,
    text: "Răng sữa có quan trọng không?",
    options: ["Đúng, rất quan trọng cho việc ăn nhai và định hướng răng vĩnh viễn", "Sai, không quan trọng"],
    correctAnswer: 0,
    category: "Kiến thức cơ bản",
    explanation: "Răng sữa giúp trẻ ăn nhai, phát âm và giữ chỗ cho răng vĩnh viễn mọc đúng vị trí."
  },
  {
    id: 8,
    text: "Có nên đánh răng ngay sau khi ăn đồ chua không?",
    options: ["Có", "Không, nên đợi ít nhất 30 phút"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Axit trong đồ chua làm mềm men răng tạm thời, đánh răng ngay sẽ làm mòn men răng nhanh hơn."
  },
  {
    id: 9,
    text: "Chỉ dùng nước súc miệng có thay thế đánh răng được không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Nước súc miệng không thể loại bỏ mảng bám cơ học như việc chải răng bằng bàn chải."
  },
  {
    id: 10,
    text: "Nên dùng bàn chải cứng hay mềm?",
    options: ["Cứng", "Mềm"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Bàn chải lông mềm giúp làm sạch hiệu quả mà không gây tổn thương nướu và men răng."
  },
  {
    id: 11,
    text: "Trẻ nhỏ có cần kem đánh răng riêng không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Kiến thức cơ bản",
    explanation: "Trẻ nhỏ cần lượng Fluoride thấp hơn và hương vị phù hợp để tránh nuốt phải kem đánh răng."
  },
  {
    id: 12,
    text: "Nhai kẹo cao su có thể thay đánh răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "Kẹo cao su chỉ hỗ trợ làm sạch bề mặt và kích thích tiết nước bọt, không thay thế được bàn chải."
  },
  {
    id: 13,
    text: "Mỗi lần đánh răng nên kéo dài bao lâu?",
    options: ["1 phút", "2 phút", "5 phút", "Càng lâu càng tốt"],
    correctAnswer: 1,
    category: "Kiến thức cơ bản",
    explanation: "2 phút là thời gian tối thiểu để đảm bảo bàn chải đi qua tất cả các mặt của răng."
  },
  {
    id: 14,
    text: "Có nên đánh răng sau khi uống nước ngọt không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Kiến thức cơ bản",
    explanation: "Đường và axit trong nước ngọt rất hại răng, cần chải sạch để tránh sâu răng."
  },
  {
    id: 15,
    text: "Đánh răng buổi tối có quan trọng không?",
    options: ["Đúng, rất quan trọng", "Sai, không quan trọng"],
    correctAnswer: 0,
    category: "Kiến thức cơ bản",
    explanation: "Ban đêm nước bọt tiết ra ít hơn, nếu không đánh răng, vi khuẩn sẽ hoạt động mạnh gây sâu răng."
  },
  // PHẦN 2: SÂU RĂNG – VIÊM NƯỚU
  {
    id: 16,
    text: "Ăn nhiều đồ ngọt có dễ bị sâu răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Đường là nguồn thức ăn chính của vi khuẩn gây sâu răng, tạo ra axit phá hủy men răng."
  },
  {
    id: 17,
    text: "Sâu răng có tự hết không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Sâu răng - Viêm nướu",
    explanation: "Sâu răng là tổn thương vĩnh viễn trên mô cứng của răng, cần can thiệp nha khoa để điều trị."
  },
  {
    id: 18,
    text: "Đau răng có phải lúc nào cũng do sâu răng?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Đau răng có thể do viêm tủy, viêm nướu, mọc răng khôn hoặc chấn thương răng."
  },
  {
    id: 19,
    text: "Viêm nướu có thể gây chảy máu khi đánh răng?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Chảy máu nướu là dấu hiệu sớm của viêm nướu do tích tụ mảng bám và cao răng."
  },
  {
    id: 20,
    text: "Không đau thì không cần đi khám răng?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Sâu răng - Viêm nướu",
    explanation: "Nhiều bệnh lý răng miệng diễn ra âm thầm, khám định kỳ giúp phát hiện sớm khi chưa đau."
  },
  {
    id: 21,
    text: "Cao răng có tự hết khi đánh răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Sâu răng - Viêm nướu",
    explanation: "Cao răng là mảng bám đã vôi hóa, rất cứng, chỉ có thể loại bỏ bằng dụng cụ chuyên dụng của nha sĩ."
  },
  {
    id: 22,
    text: "Hôi miệng có thể do răng miệng không sạch?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Vi khuẩn phân hủy thức ăn thừa trong miệng tạo ra mùi hôi khó chịu."
  },
  {
    id: 23,
    text: "Sâu răng có lây không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Vi khuẩn gây sâu răng (như Streptococcus mutans) có thể lây qua đường nước bọt."
  },
  {
    id: 24,
    text: "Trẻ em có bị sâu răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Trẻ em rất dễ bị sâu răng do men răng mỏng và thói quen ăn nhiều đồ ngọt."
  },
  {
    id: 25,
    text: "Viêm nướu có nguy hiểm không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Viêm nướu nếu không điều trị sẽ tiến triển thành viêm nha chu gây mất răng."
  },
  {
    id: 26,
    text: "Đánh răng đúng cách giúp giảm sâu răng?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Chải răng đúng kỹ thuật giúp loại bỏ mảng bám hiệu quả nhất, ngăn chặn sâu răng."
  },
  {
    id: 27,
    text: "Có nên lấy cao răng định kỳ không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Lấy cao răng mỗi 6 tháng giúp ngăn ngừa viêm nướu và hôi miệng."
  },
  {
    id: 28,
    text: "Cao răng thường có màu gì?",
    options: ["Trắng", "Vàng (có thể đen)", "Xanh", "Đỏ"],
    correctAnswer: 1,
    category: "Sâu răng - Viêm nướu",
    explanation: "Cao răng ban đầu màu vàng nhạt, lâu ngày có thể chuyển sang màu nâu hoặc đen do phẩm màu thức ăn."
  },
  {
    id: 29,
    text: "Sâu răng có thể gây mất răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Sâu răng - Viêm nướu",
    explanation: "Sâu răng nặng phá hủy toàn bộ thân răng và gây viêm nhiễm vùng chóp, buộc phải nhổ bỏ."
  },
  {
    id: 30,
    text: "Đau răng nên làm gì?",
    options: ["Tự mua thuốc uống", "Đi khám nha sĩ", "Để tự khỏi", "Chườm đá mãi mãi"],
    correctAnswer: 1,
    category: "Sâu răng - Viêm nướu",
    explanation: "Chỉ nha sĩ mới có thể xác định nguyên nhân và điều trị triệt để cơn đau răng."
  },
  // PHẦN 3: THÓI QUEN HẰNG NGÀY
  {
    id: 31,
    text: "Uống nhiều nước có tốt cho răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Nước giúp làm sạch khoang miệng và duy trì độ ẩm, trung hòa axit do vi khuẩn tạo ra."
  },
  {
    id: 32,
    text: "Uống nước ngọt thường xuyên có hại răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Nước ngọt chứa nhiều đường và axit, là 'kẻ thù' số một của men răng."
  },
  {
    id: 33,
    text: "Ăn đêm có dễ gây sâu răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Ăn đêm mà không chải răng trước khi ngủ sẽ tạo điều kiện cho vi khuẩn hoạt động suốt đêm."
  },
  {
    id: 34,
    text: "Ngậm kẹo lâu trong miệng có tốt không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Thói quen hằng ngày",
    explanation: "Ngậm kẹo lâu kéo dài thời gian răng tiếp xúc với đường, làm tăng nguy cơ sâu răng."
  },
  {
    id: 35,
    text: "Dùng tăm xỉa răng nhiều có tốt không?",
    options: ["Đúng", "Sai, nên dùng chỉ nha khoa"],
    correctAnswer: 1,
    category: "Thói quen hằng ngày",
    explanation: "Tăm có thể làm thưa kẽ răng và tổn thương nướu, chỉ nha khoa là lựa chọn an toàn hơn."
  },
  {
    id: 36,
    text: "Có nên dùng chỉ nha khoa không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Chỉ nha khoa giúp làm sạch những kẽ răng mà bàn chải không thể chạm tới."
  },
  {
    id: 37,
    text: "Uống trà, cà phê nhiều có làm ố răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Các sắc tố trong trà và cà phê dễ bám vào men răng, gây xỉn màu theo thời gian."
  },
  {
    id: 38,
    text: "Hút thuốc lá có ảnh hưởng răng miệng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Thuốc lá gây hôi miệng, ố răng và tăng nguy cơ mắc các bệnh nha chu nghiêm trọng."
  },
  {
    id: 39,
    text: "Nhai đá lạnh có tốt cho răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 1,
    category: "Thói quen hằng ngày",
    explanation: "Nhiệt độ quá lạnh và độ cứng của đá có thể gây nứt hoặc mẻ men răng."
  },
  {
    id: 40,
    text: "Uống sữa có tốt cho răng không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Thói quen hằng ngày",
    explanation: "Sữa cung cấp Canxi và Vitamin D giúp răng chắc khỏe từ bên trong."
  },
  // PHẦN 4: PHỤ HUYNH & TRẺ EM
  {
    id: 41,
    text: "Trẻ mấy tuổi nên bắt đầu đánh răng?",
    options: ["1 tuổi (hoặc khi mọc răng)", "3 tuổi", "6 tuổi", "Khi thay răng sữa"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Cần vệ sinh răng miệng cho trẻ ngay từ khi chiếc răng đầu tiên nhú lên."
  },
  {
    id: 42,
    text: "Phụ huynh có nên nhắc trẻ đánh răng mỗi ngày không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Trẻ nhỏ chưa tự ý thức được, sự nhắc nhở của cha mẹ giúp trẻ hình thành thói quen tốt."
  },
  {
    id: 43,
    text: "Trẻ em có nên khám răng định kỳ không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Khám định kỳ giúp phát hiện sớm các vấn đề về răng sữa và sự phát triển của xương hàm."
  },
  {
    id: 44,
    text: "Bao lâu nên đưa trẻ đi khám răng?",
    options: ["3 tháng", "6 tháng", "1 năm", "Khi nào trẻ kêu đau"],
    correctAnswer: 1,
    category: "Phụ huynh & Trẻ em",
    explanation: "6 tháng là khoảng thời gian lý tưởng để kiểm tra sức khỏe răng miệng cho trẻ."
  },
  {
    id: 45,
    text: "Trẻ ăn nhiều bánh kẹo có cần kiểm tra răng thường xuyên không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Ăn nhiều đồ ngọt làm tăng nguy cơ sâu răng, cần được giám sát kỹ lưỡng hơn."
  },
  {
    id: 46,
    text: "Trẻ ngủ quên không đánh răng có sao không?",
    options: ["Đúng (có hại)", "Sai (không sao)"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Ngủ quên không đánh răng khiến thức ăn bám trên răng cả đêm, rất dễ gây sâu răng."
  },
  {
    id: 47,
    text: "Có nên cho trẻ dùng nước súc miệng người lớn?",
    options: ["Có", "Không"],
    correctAnswer: 1,
    category: "Phụ huynh & Trẻ em",
    explanation: "Nước súc miệng người lớn có nồng độ cồn và hóa chất cao, không an toàn cho trẻ em."
  },
  {
    id: 48,
    text: "Phụ huynh có nên kiểm tra răng cho con không?",
    options: ["Có", "Không"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Cha mẹ nên thường xuyên quan sát răng con để phát hiện sớm các đốm trắng hoặc lỗ sâu."
  },
  {
    id: 49,
    text: "Trẻ sợ nha sĩ có nên vẫn đưa đi khám không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Nên đưa trẻ đi khám để trẻ làm quen với môi trường nha khoa, tránh tâm lý sợ hãi sau này."
  },
  {
    id: 50,
    text: "Chăm sóc răng sớm có giúp tiết kiệm chi phí sau này không?",
    options: ["Đúng", "Sai"],
    correctAnswer: 0,
    category: "Phụ huynh & Trẻ em",
    explanation: "Phòng bệnh luôn rẻ hơn chữa bệnh. Chăm sóc tốt từ đầu giúp tránh các điều trị tốn kém sau này."
  }
];
