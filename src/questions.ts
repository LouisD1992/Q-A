import { Question, QuizSet } from './types';

export const QUIZ_SETS: QuizSet[] = [
  {
    id: 'basic',
    title: {
      vi: 'Nhập môn Nha khoa',
      en: 'Basic Dental Intro',
      zh: '牙科基础入门',
      ko: '기초 치과 입문'
    },
    description: {
      vi: 'Kiến thức cơ bản nhất về cách chăm sóc răng miệng hằng ngày.',
      en: 'The most basic knowledge about daily oral care.',
      zh: '关于日常口腔护理的最基础知识。',
      ko: '일상적인 구강 관리에 대한 가장 기초적인 지식.'
    },
    icon: 'Lightbulb',
    questions: [
      {
        id: 1,
        text: {
          vi: "Một ngày nên đánh răng mấy lần?",
          en: "How many times a day should you brush your teeth?",
          zh: "一天应该刷几次牙？",
          ko: "하루에 몇 번 양치질을 해야 할까요?"
        },
        options: {
          vi: ["1 lần", "2 lần", "3 lần", "Không cần đánh răng"],
          en: ["Once", "Twice", "3 times", "No need to brush"],
          zh: ["1 次", "2 次", "3 次", "不需要刷牙"],
          ko: ["1번", "2번", "3번", "양치질 필요 없음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Đánh răng 2 lần mỗi ngày (sáng và tối) là tiêu chuẩn vàng để loại bỏ mảng bám hiệu quả.",
          en: "Brushing twice a day (morning and night) is the gold standard for effective plaque removal.",
          zh: "每天刷牙两次（早晚各一次）是有效去除牙菌斑的金标准。",
          ko: "하루 두 번(아침과 밤) 양치질하는 것이 효과적인 치태 제거를 위한 골든 스탠다드입니다."
        }
      },
      {
        id: 2,
        text: {
          vi: "Nên đánh răng vào thời điểm nào là tốt nhất?",
          en: "When is the best time to brush your teeth?",
          zh: "什么时候刷牙最好？",
          ko: "양치질하기 가장 좋은 시간은 언제인가요?"
        },
        options: {
          vi: ["Chỉ sau khi ăn sáng", "Chỉ trước khi đi ngủ", "Cả sau ăn & trước ngủ", "Khi nào thấy răng bẩn"],
          en: ["Only after breakfast", "Only before bed", "Both after eating & before bed", "Whenever teeth look dirty"],
          zh: ["仅在早餐后", "仅在睡前", "餐后和睡前", "牙齿看起来脏的时候"],
          ko: ["아침 식사 후만", "자기 전만", "식사 후 및 자기 전 둘 다", "치아가 더러워 보일 때마다"]
        },
        correctAnswer: 2,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Đánh răng sau khi ăn giúp loại bỏ thức ăn thừa, và trước khi ngủ giúp bảo vệ răng suốt đêm dài.",
          en: "Brushing after eating removes food debris, and before bed protects teeth throughout the long night.",
          zh: "餐后刷牙有助于清除食物残渣，睡前刷牙有助于在漫漫长夜保护牙齿。",
          ko: "식사 후 양치질은 음식물 찌꺼기를 제거하고, 자기 전 양치질은 긴 밤 동안 치아를 보호합니다."
        }
      },
      {
        id: 3,
        text: {
          vi: "Đánh răng quá mạnh có tốt không?",
          en: "Is brushing too hard good for you?",
          zh: "用力过猛刷牙好吗？",
          ko: "너무 세게 양치질하는 것이 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Lực quá mạnh không làm răng sạch hơn mà còn gây mòn cổ răng và tụt nướu.",
          en: "Too much force doesn't make teeth cleaner; it causes tooth neck wear and gum recession.",
          zh: "用力过猛并不能让牙齿更干净，反而会导致牙颈部磨损和牙龈萎缩。",
          ko: "너무 세게 힘을 주면 치아가 더 깨끗해지지 않고 치경부 마모와 잇몸 퇴축을 유발합니다."
        }
      },
      {
        id: 4,
        text: {
          vi: "Trẻ em có cần đánh răng không?",
          en: "Do children need to brush their teeth?",
          zh: "儿童需要刷牙吗？",
          ko: "어린이도 양치질이 필요할까요?"
        },
        options: {
          vi: ["Cần", "Không cần"],
          en: ["Yes", "No"],
          zh: ["需要", "不需要"],
          ko: ["필요함", "필요 없음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Răng sữa đóng vai trò quan trọng trong việc định hướng răng vĩnh viễn, nên cần được chăm sóc sớm.",
          en: "Baby teeth play an important role in guiding permanent teeth, so they need early care.",
          zh: "乳牙在引导恒牙方面起着重要作用，因此需要早期护理。",
          ko: "유치는 영구치를 안내하는 데 중요한 역할을 하므로 조기 관리가 필요합니다."
        }
      },
      {
        id: 5,
        text: {
          vi: "Bàn chải nên thay sau bao lâu?",
          en: "How often should you replace your toothbrush?",
          zh: "牙刷应该多久更换一次？",
          ko: "칫솔은 얼마나 자주 교체해야 할까요?"
        },
        options: {
          vi: ["1 tháng", "3 tháng", "6 tháng", "Khi nào bàn chải hỏng"],
          en: ["1 month", "3 months", "6 months", "When it's broken"],
          zh: ["1 个月", "3 个月", "6 个月", "牙刷坏了的时候"],
          ko: ["1개월", "3개월", "6개월", "칫솔이 망가졌을 때"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Sau 3 tháng, lông bàn chải thường bị xơ và chứa nhiều vi khuẩn, không còn hiệu quả làm sạch.",
          en: "After 3 months, bristles often become frayed and harbor bacteria, losing their cleaning effectiveness.",
          zh: "3 个月后，刷毛通常会变得磨损并滋生细菌，失去清洁效果。",
          ko: "3개월이 지나면 칫솔모가 마모되고 박테리아가 서식하여 세정력이 떨어집니다."
        }
      },
      {
        id: 6,
        text: {
          vi: "Đánh răng xong có cần súc miệng lại không?",
          en: "Do you need to rinse your mouth after brushing?",
          zh: "刷牙后需要漱口吗？",
          ko: "양치질 후 입을 헹궈야 할까요?"
        },
        options: {
          vi: ["Cần", "Không cần"],
          en: ["Yes", "No"],
          zh: ["需要", "不需要"],
          ko: ["필요함", "필요 없음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Súc miệng lại giúp loại bỏ hoàn toàn kem đánh răng thừa và các mảng bám đã được chải sạch.",
          en: "Rinsing helps completely remove excess toothpaste and the plaque that has been brushed away.",
          zh: "漱口有助于彻底清除多余的牙膏和刷掉的牙菌斑。",
          ko: "입을 헹구면 남은 치약과 닦아낸 치태를 완전히 제거하는 데 도움이 됩니다."
        }
      },
      {
        id: 7,
        text: {
          vi: "Răng sữa có quan trọng không?",
          en: "Are baby teeth important?",
          zh: "乳牙重要吗？",
          ko: "유치가 중요할까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["重要", "不重要"],
          ko: ["중요함", "중요하지 않음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Răng sữa giúp trẻ ăn nhai, phát âm và giữ chỗ cho răng vĩnh viễn mọc đúng vị trí.",
          en: "Baby teeth help children chew, speak, and save space for permanent teeth to grow correctly.",
          zh: "乳牙帮助儿童咀嚼、发音，并为恒牙的正确生长留出空间。",
          ko: "유치는 아이들이 씹고, 말하고, 영구치가 올바르게 자랄 수 있는 공간을 확보하는 데 도움이 됩니다."
        }
      },
      {
        id: 8,
        text: {
          vi: "Có nên đánh răng ngay sau khi ăn đồ chua không?",
          en: "Should you brush immediately after eating acidic food?",
          zh: "吃完酸性食物后应该立即刷牙吗？",
          ko: "산성 음식을 먹은 직후에 바로 양치질을 해야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Axit trong đồ chua làm mềm men răng tạm thời, đánh răng ngay sẽ làm mòn men răng nhanh hơn.",
          en: "Acid in sour foods temporarily softens enamel; brushing immediately will wear it down faster.",
          zh: "酸性食物中的酸会暂时软化牙釉质；立即刷牙会使其磨损得更快。",
          ko: "신 음식의 산은 일시적으로 법랑질을 부드럽게 합니다. 즉시 양치질을 하면 법랑질이 더 빨리 마모됩니다."
        }
      },
      {
        id: 9,
        text: {
          vi: "Chỉ dùng nước súc miệng có thay thế đánh răng được không?",
          en: "Can mouthwash replace brushing?",
          zh: "漱口水可以代替刷牙吗？",
          ko: "가글액이 양치질을 대신할 수 있을까요?"
        },
        options: {
          vi: ["Được", "Không được"],
          en: ["Yes", "No"],
          zh: ["可以", "不可以"],
          ko: ["가능함", "불가능함"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Nước súc miệng không thể loại bỏ mảng bám cơ học như việc chải răng bằng bàn chải.",
          en: "Mouthwash cannot mechanically remove plaque like brushing with a toothbrush can.",
          zh: "漱口水不能像用牙刷刷牙那样机械地清除牙菌斑。",
          ko: "가글액은 칫솔질처럼 기계적으로 치태를 제거할 수 없습니다."
        }
      },
      {
        id: 10,
        text: {
          vi: "Nên dùng bàn chải cứng hay mềm?",
          en: "Should you use a hard or soft toothbrush?",
          zh: "应该用硬毛牙刷还是软毛牙刷？",
          ko: "딱딱한 칫솔과 부드러운 칫솔 중 어느 것을 사용해야 할까요?"
        },
        options: {
          vi: ["Cứng", "Mềm"],
          en: ["Hard", "Soft"],
          zh: ["硬", "软"],
          ko: ["딱딱함", "부드러움"]
        },
        correctAnswer: 1,
        category: {
          vi: "Kiến thức cơ bản",
          en: "Basic Knowledge",
          zh: "基础知识",
          ko: "기초 지식"
        },
        explanation: {
          vi: "Bàn chải lông mềm giúp làm sạch hiệu quả mà không gây tổn thương nướu và men răng.",
          en: "Soft-bristled brushes help clean effectively without damaging gums and enamel.",
          zh: "软毛牙刷有助于有效清洁，且不会损伤牙龈和牙釉质。",
          ko: "부드러운 모의 칫솔은 잇몸과 법랑질을 손상시키지 않고 효과적으로 세정하는 데 도움이 됩니다."
        }
      }
    ]
  },
  {
    id: 'disease',
    title: {
      vi: 'Bệnh lý Răng miệng',
      en: 'Oral Diseases',
      zh: '口腔疾病',
      ko: '구강 질환'
    },
    description: {
      vi: 'Tìm hiểu về sâu răng, viêm nướu và cách phòng ngừa hiệu quả.',
      en: 'Learn about cavities, gingivitis and effective prevention.',
      zh: '了解龋齿、牙龈炎及其有效预防方法。',
      ko: '충치, 잇몸 질환 및 효과적인 예방에 대해 알아보세요.'
    },
    icon: 'Activity',
    questions: [
      {
        id: 11,
        text: {
          vi: "Ăn nhiều đồ ngọt có dễ bị sâu răng không?",
          en: "Does eating many sweets easily cause cavities?",
          zh: "吃太多甜食容易得龋齿吗？",
          ko: "단것을 많이 먹으면 충치가 생기기 쉬울까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["是", "不是"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Đường là nguồn thức ăn chính của vi khuẩn gây sâu răng, tạo ra axit phá hủy men răng.",
          en: "Sugar is the main food source for cavity-causing bacteria, creating acid that destroys enamel.",
          zh: "糖是导致龋齿的细菌的主要食物来源，会产生破坏牙釉质的酸。",
          ko: "설탕은 충치를 유발하는 박테리아의 주요 먹이원으로, 법랑질을 파괴하는 산을 생성합니다."
        }
      },
      {
        id: 12,
        text: {
          vi: "Sâu răng có tự hết không?",
          en: "Can cavities heal on their own?",
          zh: "龋齿会自愈吗？",
          ko: "충치는 저절로 나을 수 있을까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Sâu răng là tổn thương vĩnh viễn trên mô cứng của răng, cần can thiệp nha khoa để điều trị.",
          en: "A cavity is permanent damage to the hard tissue of the tooth, requiring dental intervention for treatment.",
          zh: "龋齿是牙齿硬组织的永久性损伤，需要牙科干预进行治疗。",
          ko: "충치는 치아의 단단한 조직에 발생한 영구적인 손상으로, 치료를 위해 치과적 개입이 필요합니다."
        }
      },
      {
        id: 13,
        text: {
          vi: "Đau răng có phải lúc nào cũng do sâu răng không?",
          en: "Is toothache always caused by cavities?",
          zh: "牙痛总是由龋齿引起的吗？",
          ko: "치통은 항상 충치 때문에 발생할까요?"
        },
        options: {
          vi: ["Đúng", "Sai"],
          en: ["True", "False"],
          zh: ["对", "错"],
          ko: ["참", "거짓"]
        },
        correctAnswer: 1,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Đau răng có thể do viêm tủy, viêm nướu, mọc răng khôn hoặc chấn thương răng.",
          en: "Toothache can be caused by pulpitis, gingivitis, wisdom tooth eruption, or tooth trauma.",
          zh: "牙痛可能是由牙髓炎、牙龈炎、智齿萌出或牙齿外伤引起的。",
          ko: "치통은 치수염, 잇몸 질환, 사랑니 맹출 또는 치아 외상으로 인해 발생할 수 있습니다."
        }
      },
      {
        id: 14,
        text: {
          vi: "Viêm nướu có thể gây chảy máu khi đánh răng?",
          en: "Can gingivitis cause bleeding when brushing?",
          zh: "牙龈炎会导致刷牙时出血吗？",
          ko: "잇몸 질환이 양치질할 때 출혈을 유발할 수 있을까요?"
        },
        options: {
          vi: ["Đúng", "Sai"],
          en: ["True", "False"],
          zh: ["对", "错"],
          ko: ["참", "거짓"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Chảy máu nướu là dấu hiệu sớm của viêm nướu do tích tụ mảng bám và cao răng.",
          en: "Gum bleeding is an early sign of gingivitis caused by plaque and tartar buildup.",
          zh: "牙龈出血是由牙菌斑和牙结石堆积引起的牙龈炎的早期迹象。",
          ko: "잇몸 출혈은 치태와 치석 축적으로 인한 잇몸 질환의 초기 징후입니다."
        }
      },
      {
        id: 15,
        text: {
          vi: "Không đau thì không cần đi khám răng?",
          en: "If it doesn't hurt, no need to see a dentist?",
          zh: "如果不疼，就不需要看牙医吗？",
          ko: "아프지 않으면 치과에 갈 필요가 없을까요?"
        },
        options: {
          vi: ["Đúng", "Sai"],
          en: ["True", "False"],
          zh: ["对", "错"],
          ko: ["참", "거짓"]
        },
        correctAnswer: 1,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Nhiều bệnh lý răng miệng diễn ra âm thầm, khám định kỳ giúp phát hiện sớm khi chưa đau.",
          en: "Many oral diseases progress silently; regular check-ups help detect them early before pain starts.",
          zh: "许多口腔疾病在无声无息中进展；定期检查有助于在疼痛开始前尽早发现它们。",
          ko: "많은 구강 질환이 조용히 진행됩니다. 정기적인 검진은 통증이 시작되기 전에 조기에 발견하는 데 도움이 됩니다."
        }
      },
      {
        id: 16,
        text: {
          vi: "Cao răng có tự hết khi đánh răng không?",
          en: "Does tartar go away on its own when brushing?",
          zh: "刷牙时牙结石会自行消失吗？",
          ko: "양치질할 때 치석이 저절로 사라질까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Cao răng là mảng bám đã vôi hóa, chỉ có thể loại bỏ bằng dụng cụ chuyên dụng của nha sĩ.",
          en: "Tartar is calcified plaque that can only be removed with professional dental tools.",
          zh: "牙结石是钙化的牙菌斑，只能使用专业的牙科工具清除。",
          ko: "치석은 석회화된 치태로, 전문적인 치과 도구로만 제거할 수 있습니다."
        }
      },
      {
        id: 17,
        text: {
          vi: "Viêm nướu có thể dẫn đến rụng răng không?",
          en: "Can gingivitis lead to tooth loss?",
          zh: "牙龈炎会导致牙齿脱落吗？",
          ko: "잇몸 질환이 치아 상실로 이어질 수 있을까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Viêm nướu nếu không điều trị sẽ tiến triển thành viêm nha chu, phá hủy xương và làm rụng răng.",
          en: "Untreated gingivitis can progress to periodontitis, destroying bone and causing tooth loss.",
          zh: "未经治疗的牙龈炎会发展为牙周炎，破坏骨骼并导致牙齿脱落。",
          ko: "치료하지 않은 잇몸 질환은 치주염으로 진행되어 뼈를 파괴하고 치아 상실을 유발할 수 있습니다."
        }
      },
      {
        id: 18,
        text: {
          vi: "Sâu răng có lây không?",
          en: "Are cavities contagious?",
          zh: "龋齿会传染吗？",
          ko: "충치는 전염되나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Vi khuẩn gây sâu răng (như Streptococcus mutans) có thể lây qua đường nước bọt.",
          en: "Cavity-causing bacteria (like Streptococcus mutans) can be transmitted through saliva.",
          zh: "导致龋齿的细菌（如变异链球菌）可以通过唾液传播。",
          ko: "충치 유발 박테리아(예: 뮤탄스균)는 침을 통해 전염될 수 있습니다."
        }
      },
      {
        id: 19,
        text: {
          vi: "Trẻ em có bị sâu răng không?",
          en: "Do children get cavities?",
          zh: "儿童会得龋齿吗？",
          ko: "어린이도 충치가 생길까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Trẻ em rất dễ bị sâu răng sữa do men răng mỏng và thói quen ăn đồ ngọt.",
          en: "Children are very prone to baby teeth cavities due to thin enamel and sweet eating habits.",
          zh: "由于牙釉质薄和吃甜食的习惯，儿童非常容易患乳牙龋齿。",
          ko: "아이들은 얇은 법랑질과 단것을 먹는 습관 때문에 유치 충치에 매우 취약합니다."
        }
      },
      {
        id: 20,
        text: {
          vi: "Hôi miệng có phải là bệnh lý không?",
          en: "Is bad breath a medical condition?",
          zh: "口臭是一种病吗？",
          ko: "입냄새가 질환일까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["是", "不是"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Hôi miệng thường do vi khuẩn trong khoang miệng hoặc các vấn đề về tiêu hóa, hô hấp.",
          en: "Bad breath is often caused by bacteria in the mouth or digestive and respiratory issues.",
          zh: "口臭通常是由口腔中的细菌或消化和呼吸问题引起的。",
          ko: "입냄새는 종종 입안의 박테리아나 소화 및 호흡기 문제로 인해 발생합니다."
        }
      }
    ]
  },
          vi: "Uống nhiều nước có tốt cho răng không?",
          en: "Is drinking plenty of water good for your teeth?",
          zh: "多喝水对牙齿有好处吗？",
          ko: "물을 많이 마시는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nước giúp làm sạch khoang miệng và duy trì độ ẩm, trung hòa axit do vi khuẩn tạo ra.",
          en: "Water helps clean the mouth and maintain moisture, neutralizing acids produced by bacteria.",
          zh: "水有助于清洁口腔并保持湿润，中和细菌产生的酸。",
          ko: "물은 입안을 깨끗하게 하고 수분을 유지하며 박테리아가 생성하는 산을 중화하는 데 도움이 됩니다."
        }
      },
      {
        id: 22,
        text: {
          vi: "Uống nước ngọt thường xuyên có hại răng không?",
          en: "Does drinking soda frequently harm your teeth?",
          zh: "经常喝软饮料会伤害牙齿吗？",
          ko: "탄산음료를 자주 마시는 것이 치아에 해로울까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nước ngọt chứa nhiều đường và axit, là 'kẻ thù' số một của men răng.",
          en: "Soft drinks contain a lot of sugar and acid, making them the number one 'enemy' of tooth enamel.",
          zh: "软饮料含有大量的糖和酸，是牙釉质的第一大“敌人”。",
          ko: "탄산음료에는 다량의 설탕과 산이 들어 있어 치아 법랑질의 제1의 '적'입니다."
        }
      },
      {
        id: 23,
        text: {
          vi: "Ăn đêm có dễ gây sâu răng không?",
          en: "Does late-night snacking easily cause cavities?",
          zh: "吃宵夜容易导致龋齿吗？",
          ko: "야식을 먹으면 충치가 생기기 쉬울까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Ăn đêm mà không chải răng trước khi ngủ sẽ tạo điều kiện cho vi khuẩn hoạt động suốt đêm.",
          en: "Eating at night without brushing before bed allows bacteria to be active all night long.",
          zh: "晚上吃完东西不刷牙就睡觉，会让细菌整晚都很活跃。",
          ko: "자기 전에 양치질을 하지 않고 밤에 음식을 먹으면 밤새도록 박테리아가 활발하게 활동하게 됩니다."
        }
      },
      {
        id: 24,
        text: {
          vi: "Ngậm kẹo lâu trong miệng có tốt không?",
          en: "Is keeping candy in your mouth for a long time good?",
          zh: "把糖果长时间含在嘴里好吗？",
          ko: "사탕을 입안에 오래 물고 있는 것이 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Ngậm kẹo lâu kéo dài thời gian răng tiếp xúc với đường, làm tăng nguy cơ sâu răng.",
          en: "Keeping candy in your mouth for a long time extends the time teeth are exposed to sugar, increasing the risk of cavities.",
          zh: "将糖果长时间含在嘴里会延长牙齿接触糖的时间，增加患龋齿的风险。",
          ko: "사탕을 입안에 오래 물고 있으면 치아가 설탕에 노출되는 시간이 길어져 충치 위험이 높아집니다."
        }
      },
      {
        id: 25,
        text: {
          vi: "Dùng tăm xỉa răng nhiều có tốt không?",
          en: "Is using toothpicks frequently good?",
          zh: "经常使用牙签好吗？",
          ko: "이쑤시개를 자주 사용하는 것이 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Tăm có thể làm thưa kẽ răng và tổn thương nướu, chỉ nha khoa là lựa chọn an toàn hơn.",
          en: "Toothpicks can widen gaps between teeth and damage gums; dental floss is a safer choice.",
          zh: "牙签会扩大牙缝并损伤牙龈；牙线是更安全的选择。",
          ko: "이쑤시개는 치아 사이의 간격을 넓히고 잇몸을 손상시킬 수 있습니다. 치실이 더 안전한 선택입니다."
        }
      },
      {
        id: 26,
        text: {
          vi: "Có nên dùng chỉ nha khoa không?",
          en: "Should you use dental floss?",
          zh: "应该使用牙线吗？",
          ko: "치실을 사용해야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Chỉ nha khoa giúp làm sạch những kẽ răng mà bàn chải không thể chạm tới.",
          en: "Dental floss helps clean the spaces between teeth that a toothbrush cannot reach.",
          zh: "牙线有助于清洁牙刷无法触及的牙缝。",
          ko: "치실은 칫솔이 닿지 않는 치아 사이 공간을 청소하는 데 도움이 됩니다."
        }
      },
      {
        id: 27,
        text: {
          vi: "Uống trà, cà phê nhiều có làm ố răng không?",
          en: "Does drinking a lot of tea or coffee stain your teeth?",
          zh: "喝很多茶或咖啡会使牙齿变色吗？",
          ko: "차나 커피를 많이 마시면 치아가 변색될까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Các sắc tố trong trà và cà phê dễ bám vào men răng, gây xỉn màu theo thời gian.",
          en: "Pigments in tea and coffee easily stick to tooth enamel, causing discoloration over time.",
          zh: "茶和咖啡中的色素很容易粘在牙釉质上，随着时间的推移导致变色。",
          ko: "차와 커피의 색소는 치아 법랑질에 쉽게 달라붙어 시간이 지남에 따라 변색을 일으킵니다."
        }
      },
      {
        id: 28,
        text: {
          vi: "Hút thuốc lá có ảnh hưởng răng miệng không?",
          en: "Does smoking affect oral health?",
          zh: "吸烟会影响口腔健康吗？",
          ko: "흡연이 구강 건강에 영향을 미칠까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Thuốc lá gây hôi miệng, ố răng và tăng nguy cơ mắc các bệnh nha chu nghiêm trọng.",
          en: "Smoking causes bad breath, stained teeth, and increases the risk of serious periodontal diseases.",
          zh: "吸烟会导致口臭、牙齿变色，并增加患严重牙周病的风险。",
          ko: "흡연은 입냄새와 치아 변색을 유발하고 심각한 치주 질환의 위험을 높입니다."
        }
      },
      {
        id: 29,
        text: {
          vi: "Nhai đá lạnh có tốt cho răng không?",
          en: "Is chewing ice good for your teeth?",
          zh: "嚼冰块对牙齿有好处吗？",
          ko: "얼음을 씹는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nhiệt độ quá lạnh và độ cứng của đá có thể gây nứt hoặc mẻ men răng.",
          en: "The extreme cold and hardness of ice can cause tooth enamel to crack or chip.",
          zh: "冰块的极度寒冷和硬度会导致牙釉质开裂或崩裂。",
          ko: "얼음의 극심한 추위와 단단함은 치아 법랑질에 균열이나 치핑을 유발할 수 있습니다."
        }
      },
      {
        id: 30,
        text: {
          vi: "Uống sữa có tốt cho răng không?",
          en: "Is drinking milk good for your teeth?",
          zh: "喝牛奶对牙齿有好处吗？",
          ko: "우유를 마시는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Sữa cung cấp Canxi và Vitamin D giúp răng chắc khỏe từ bên trong.",
          en: "Milk provides Calcium and Vitamin D, helping teeth stay strong from the inside.",
          zh: "牛奶提供钙和维生素 D，帮助牙齿从内部保持强壮。",
          ko: "우유는 칼슘과 비타민 D를 제공하여 치아가 내부에서부터 튼튼하게 유지되도록 돕습니다."
        }
      }
    ]
  },
��      {
        id: 18,
        text: {
          vi: "Sâu răng có lây không?",
          en: "Are cavities contagious?",
          zh: "龋齿会传染吗？",
          ko: "충치는 전염되나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Vi khuẩn gây sâu răng (như Streptococcus mutans) có thể lây qua đường nước bọt.",
          en: "Cavity-causing bacteria (like Streptococcus mutans) can be transmitted through saliva.",
          zh: "导致龋齿的细菌（如变异链球菌）可以通过唾液传播。",
          ko: "충치 유발 박테리아(예: 뮤탄스균)는 침을 통해 전염될 수 있습니다."
        }
      },
      {
        id: 19,
        text: {
          vi: "Trẻ em có bị sâu răng không?",
          en: "Do children get cavities?",
          zh: "儿童会得龋齿吗？",
          ko: "어린이도 충치가 생길까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Trẻ em rất dễ bị sâu răng do men răng mỏng và thói quen ăn nhiều đồ ngọt.",
          en: "Children are very susceptible to cavities due to thin enamel and the habit of eating many sweets.",
          zh: "由于牙釉质薄且有吃甜食的习惯，儿童非常容易患龋齿。",
          ko: "어린이는 법랑질이 얇고 단것을 많이 먹는 습관 때문에 충치에 매우 취약합니다."
        }
      },
      {
        id: 20,
        text: {
          vi: "Viêm nướu có nguy hiểm không?",
          en: "Is gingivitis dangerous?",
          zh: "牙龈炎危险吗？",
          ko: "잇몸 질환은 위험할까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["是", "不是"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Sâu răng - Viêm nướu",
          en: "Cavities - Gingivitis",
          zh: "龋齿 - 牙龈炎",
          ko: "충치 - 잇몸 질환"
        },
        explanation: {
          vi: "Viêm nướu nếu không điều trị sẽ tiến triển thành viêm nha chu gây mất răng.",
          en: "If left untreated, gingivitis will progress to periodontitis, which can cause tooth loss.",
          zh: "如果不治疗，牙龈炎会发展成牙周炎，从而导致牙齿脱落。",
          ko: "잇몸 질환을 치료하지 않고 방치하면 치주염으로 진행되어 치아 상실을 유발할 수 있습니다."
        }
      }
    ]
  },
  {
    id: 'habits',
    title: {
      vi: 'Lối sống & Răng miệng',
      en: 'Lifestyle & Oral Health',
      zh: '生活方式与口腔健康',
      ko: '생활 방식 및 구강 건강'
    },
    description: {
      vi: 'Ảnh hưởng của thói quen ăn uống và sinh hoạt đến nụ cười của bạn.',
      en: 'The impact of eating and living habits on your smile.',
      zh: '饮食和生活习惯对您微笑的影响。',
      ko: '식습관과 생활 습관이 미소에 미치는 영향.'
    },
    icon: 'Stethoscope',
    questions: [
  {
    id: 'habits',
    title: {
      vi: 'Lối sống & Răng miệng',
      en: 'Lifestyle & Oral Health',
      zh: '生活方式与口腔健康',
      ko: '생활 방식 및 구강 건강'
    },
    description: {
      vi: 'Ảnh hưởng của thói quen ăn uống và sinh hoạt đến nụ cười của bạn.',
      en: 'The impact of eating and living habits on your smile.',
      zh: '饮食和生活习惯对您微笑的影响。',
      ko: '식습관과 생활 습관이 미소에 미치는 영향.'
    },
    icon: 'Stethoscope',
    questions: [
      {
        id: 21,
        text: {
          vi: "Uống nhiều nước có tốt cho răng không?",
          en: "Is drinking plenty of water good for your teeth?",
          zh: "多喝水对牙齿有好处吗？",
          ko: "물을 많이 마시는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nước giúp làm sạch khoang miệng và duy trì độ ẩm, trung hòa axit do vi khuẩn tạo ra.",
          en: "Water helps clean the mouth and maintain moisture, neutralizing acids produced by bacteria.",
          zh: "水有助于清洁口腔并保持湿润，中和细菌产生的酸。",
          ko: "물은 입안을 깨끗하게 하고 수분을 유지하며 박테리아가 생성하는 산을 중화하는 데 도움이 됩니다."
        }
      },
      {
        id: 22,
        text: {
          vi: "Uống nước ngọt thường xuyên có hại răng không?",
          en: "Does drinking soda frequently harm your teeth?",
          zh: "经常喝软饮料会伤害牙齿吗？",
          ko: "탄산음료를 자주 마시는 것이 치아에 해로울까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nước ngọt chứa nhiều đường và axit, là 'kẻ thù' số một của men răng.",
          en: "Soft drinks contain a lot of sugar and acid, making them the number one 'enemy' of tooth enamel.",
          zh: "软饮料含有大量的糖和酸，是牙釉质的第一大“敌人”。",
          ko: "탄산음료에는 다량의 설탕과 산이 들어 있어 치아 법랑질의 제1의 '적'입니다."
        }
      },
      {
        id: 23,
        text: {
          vi: "Ăn đêm có dễ gây sâu răng không?",
          en: "Does late-night snacking easily cause cavities?",
          zh: "吃宵夜容易导致龋齿吗？",
          ko: "야식을 먹으면 충치가 생기기 쉬울까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Ăn đêm mà không chải răng trước khi ngủ sẽ tạo điều kiện cho vi khuẩn hoạt động suốt đêm.",
          en: "Eating at night without brushing before bed allows bacteria to be active all night long.",
          zh: "晚上吃完东西不刷牙就睡觉，会让细菌整晚都很活跃。",
          ko: "자기 전에 양치질을 하지 않고 밤에 음식을 먹으면 밤새도록 박테리아가 활발하게 활동하게 됩니다."
        }
      },
      {
        id: 24,
        text: {
          vi: "Ngậm kẹo lâu trong miệng có tốt không?",
          en: "Is keeping candy in your mouth for a long time good?",
          zh: "把糖果长时间含在嘴里好吗？",
          ko: "사탕을 입안에 오래 물고 있는 것이 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Ngậm kẹo lâu kéo dài thời gian răng tiếp xúc với đường, làm tăng nguy cơ sâu răng.",
          en: "Keeping candy in your mouth for a long time extends the time teeth are exposed to sugar, increasing the risk of cavities.",
          zh: "将糖果长时间含在嘴里会延长牙齿接触糖的时间，增加患龋齿的风险。",
          ko: "사탕을 입안에 오래 물고 있으면 치아가 설탕에 노출되는 시간이 길어져 충치 위험이 높아집니다."
        }
      },
      {
        id: 25,
        text: {
          vi: "Dùng tăm xỉa răng nhiều có tốt không?",
          en: "Is using toothpicks frequently good?",
          zh: "经常使用牙签好吗？",
          ko: "이쑤시개를 자주 사용하는 것이 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Tăm có thể làm thưa kẽ răng và tổn thương nướu, chỉ nha khoa là lựa chọn an toàn hơn.",
          en: "Toothpicks can widen gaps between teeth and damage gums; dental floss is a safer choice.",
          zh: "牙签会扩大牙缝并损伤牙龈；牙线是更安全的选择。",
          ko: "이쑤시개는 치아 사이의 간격을 넓히고 잇몸을 손상시킬 수 있습니다. 치실이 더 안전한 선택입니다."
        }
      },
      {
        id: 26,
        text: {
          vi: "Có nên dùng chỉ nha khoa không?",
          en: "Should you use dental floss?",
          zh: "应该使用牙线吗？",
          ko: "치실을 사용해야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Chỉ nha khoa giúp làm sạch những kẽ răng mà bàn chải không thể chạm tới.",
          en: "Dental floss helps clean the spaces between teeth that a toothbrush cannot reach.",
          zh: "牙线有助于清洁牙刷无法触及的牙缝。",
          ko: "치실은 칫솔이 닿지 않는 치아 사이 공간을 청소하는 데 도움이 됩니다."
        }
      },
      {
        id: 27,
        text: {
          vi: "Uống trà, cà phê nhiều có làm ố răng không?",
          en: "Does drinking a lot of tea or coffee stain your teeth?",
          zh: "喝很多茶或咖啡会使牙齿变色吗？",
          ko: "차나 커피를 많이 마시면 치아가 변색될까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Các sắc tố trong trà và cà phê dễ bám vào men răng, gây xỉn màu theo thời gian.",
          en: "Pigments in tea and coffee easily stick to tooth enamel, causing discoloration over time.",
          zh: "茶和咖啡中的色素很容易粘在牙釉质上，随着时间的推移导致变色。",
          ko: "차와 커피의 색소는 치아 법랑질에 쉽게 달라붙어 시간이 지남에 따라 변색을 일으킵니다."
        }
      },
      {
        id: 28,
        text: {
          vi: "Hút thuốc lá có ảnh hưởng răng miệng không?",
          en: "Does smoking affect oral health?",
          zh: "吸烟会影响口腔健康吗？",
          ko: "흡연이 구강 건강에 영향을 미칠까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Thuốc lá gây hôi miệng, ố răng và tăng nguy cơ mắc các bệnh nha chu nghiêm trọng.",
          en: "Smoking causes bad breath, stained teeth, and increases the risk of serious periodontal diseases.",
          zh: "吸烟会导致口臭、牙齿变色，并增加患严重牙周病的风险。",
          ko: "흡연은 입냄새와 치아 변색을 유발하고 심각한 치주 질환의 위험을 높입니다."
        }
      },
      {
        id: 29,
        text: {
          vi: "Nhai đá lạnh có tốt cho răng không?",
          en: "Is chewing ice good for your teeth?",
          zh: "嚼冰块对牙齿有好处吗？",
          ko: "얼음을 씹는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Nhiệt độ quá lạnh và độ cứng của đá có thể gây nứt hoặc mẻ men răng.",
          en: "The extreme cold and hardness of ice can cause tooth enamel to crack or chip.",
          zh: "冰块的极度寒冷和硬度会导致牙釉质开裂或崩裂。",
          ko: "얼음의 극심한 추위와 단단함은 치아 법랑질에 균열이나 치핑을 유발할 수 있습니다."
        }
      },
      {
        id: 30,
        text: {
          vi: "Uống sữa có tốt cho răng không?",
          en: "Is drinking milk good for your teeth?",
          zh: "喝牛奶对牙齿有好处吗？",
          ko: "우유를 마시는 것이 치아에 좋을까요?"
        },
        options: {
          vi: ["Tốt", "Không tốt"],
          en: ["Good", "Not good"],
          zh: ["好", "不好"],
          ko: ["좋음", "좋지 않음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Thói quen hằng ngày",
          en: "Daily Habits",
          zh: "日常习惯",
          ko: "일상 습관"
        },
        explanation: {
          vi: "Sữa cung cấp Canxi và Vitamin D giúp răng chắc khỏe từ bên trong.",
          en: "Milk provides Calcium and Vitamin D, helping teeth stay strong from the inside.",
          zh: "牛奶提供钙和维生素 D，帮助牙齿从内部保持强壮。",
          ko: "우유는 칼슘과 비타민 D를 제공하여 치아가 내부에서부터 튼튼하게 유지되도록 돕습니다."
        }
      }
    ]
  },
  {
    id: 'pediatric',
    title: {
      vi: 'Phụ huynh & Trẻ em',
      en: 'Parents & Children',
      zh: '父母与儿童',
      ko: '부모와 자녀'
    },
    description: {
      vi: 'Chăm sóc răng miệng cho trẻ em từ những chiếc răng đầu tiên.',
      en: 'Oral care for children from their very first teeth.',
      zh: '从第一颗牙齿开始的儿童口腔护理。',
      ko: '첫 번째 치아부터 시작하는 어린이를 위한 구강 관리.'
    },
    icon: 'Baby',
    questions: [
      {
        id: 31,
        text: {
          vi: "Trẻ mấy tuổi nên bắt đầu đánh răng?",
          en: "At what age should children start brushing their teeth?",
          zh: "孩子几岁应该开始刷牙？",
          ko: "아이들은 몇 살부터 양치질을 시작해야 할까요?"
        },
        options: {
          vi: ["1 tuổi (hoặc khi mọc răng)", "3 tuổi", "6 tuổi", "Khi thay răng sữa"],
          en: ["1 year old (or when teeth appear)", "3 years old", "6 years old", "When baby teeth are replaced"],
          zh: ["1 岁（或长牙时）", "3 岁", "6 岁", "换乳牙时"],
          ko: ["1세(또는 치아가 날 때)", "3세", "6세", "유치가 교체될 때"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Cần vệ sinh răng miệng cho trẻ ngay từ khi chiếc răng đầu tiên nhú lên.",
          en: "Oral hygiene for children should start as soon as the first tooth emerges.",
          zh: "从第一颗牙齿萌出开始，就应该为儿童进行口腔清洁。",
          ko: "첫 번째 치아가 나오자마자 아이들의 구강 위생 관리를 시작해야 합니다."
        }
      },
      {
        id: 32,
        text: {
          vi: "Phụ huynh có nên nhắc trẻ đánh răng mỗi ngày không?",
          en: "Should parents remind children to brush their teeth every day?",
          zh: "父母应该每天提醒孩子刷牙吗？",
          ko: "부모가 매일 아이들에게 양치질을 하라고 상기시켜야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Trẻ nhỏ chưa tự ý thức được, sự nhắc nhở của cha mẹ giúp trẻ hình thành thói quen tốt.",
          en: "Young children are not yet self-aware; parental reminders help them form good habits.",
          zh: "年幼的孩子还没有自觉意识；父母的提醒有助于他们养成良好的习惯。",
          ko: "어린 아이들은 아직 스스로 인지하지 못합니다. 부모의 상기시킴은 아이들이 좋은 습관을 형성하는 데 도움이 됩니다."
        }
      },
      {
        id: 33,
        text: {
          vi: "Trẻ em có nên khám răng định kỳ không?",
          en: "Should children have regular dental check-ups?",
          zh: "儿童应该定期进行牙科检查吗？",
          ko: "어린이도 정기적인 치과 검진을 받아야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Khám định kỳ giúp phát hiện sớm các vấn đề về răng sữa và sự phát triển của xương hàm.",
          en: "Regular check-ups help early detection of baby teeth issues and jawbone development.",
          zh: "定期检查有助于及早发现乳牙问题和颌骨发育情况。",
          ko: "정기적인 검진은 유치 문제와 턱뼈 발달을 조기에 발견하는 데 도움이 됩니다."
        }
      },
      {
        id: 34,
        text: {
          vi: "Bao lâu nên đưa trẻ đi khám răng?",
          en: "How often should you take your child to the dentist?",
          zh: "应该多久带孩子看一次牙医？",
          ko: "얼마나 자주 아이를 치과에 데려가야 할까요?"
        },
        options: {
          vi: ["3 tháng", "6 tháng", "1 năm", "Khi nào trẻ kêu đau"],
          en: ["3 months", "6 months", "1 year", "When the child complains of pain"],
          zh: ["3 个月", "6 个月", "1 年", "孩子喊疼的时候"],
          ko: ["3개월", "6개월", "1년", "아이가 아프다고 할 때"]
        },
        correctAnswer: 1,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "6 tháng là khoảng thời gian lý tưởng để kiểm tra sức khỏe răng miệng cho trẻ.",
          en: "6 months is the ideal interval to check a child's oral health.",
          zh: "6 个月是检查儿童口腔健康的理想间隔时间。",
          ko: "6개월은 아이의 구강 건강을 체크하기에 가장 이상적인 간격입니다."
        }
      },
      {
        id: 35,
        text: {
          vi: "Trẻ ăn nhiều bánh kẹo có cần kiểm tra răng thường xuyên không?",
          en: "Do children who eat many sweets need frequent dental checks?",
          zh: "吃很多糖果的孩子需要经常检查牙齿吗？",
          ko: "단것을 많이 먹는 아이들은 치과 검진을 자주 받아야 할까요?"
        },
        options: {
          vi: ["Cần", "Không cần"],
          en: ["Yes", "No"],
          zh: ["需要", "不需要"],
          ko: ["필요함", "필요 없음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母 with 儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Ăn nhiều đồ ngọt làm tăng nguy cơ sâu răng, cần được giám sát kỹ lưỡng hơn.",
          en: "Eating many sweets increases the risk of cavities, requiring closer monitoring.",
          zh: "吃太多甜食会增加患龋齿的风险，需要更密切的监测。",
          ko: "단것을 많이 먹으면 충치 위험이 높아지므로 더 세심한 모니터링이 필요합니다."
        }
      },
      {
        id: 36,
        text: {
          vi: "Trẻ ngủ quên không đánh răng có sao không?",
          en: "Is it okay if a child falls asleep without brushing their teeth?",
          zh: "如果孩子没刷牙就睡着了有关系吗？",
          ko: "아이가 양치질을 하지 않고 잠들어도 괜찮을까요?"
        },
        options: {
          vi: ["Có sao", "Không sao"],
          en: ["It matters", "It's fine"],
          zh: ["有关系", "没关系"],
          ko: ["문제가 됨", "괜찮음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Ngủ quên không đánh răng khiến thức ăn bám trên răng cả đêm, rất dễ gây sâu răng.",
          en: "Falling asleep without brushing allows food to stick to teeth all night, easily causing cavities.",
          zh: "没刷牙就睡觉会让食物整晚残留在牙齿上，很容易导致龋齿。",
          ko: "양치질을 하지 않고 잠들면 밤새도록 음식물이 치아에 달라붙어 충치가 생기기 쉽습니다."
        }
      },
      {
        id: 37,
        text: {
          vi: "Có nên cho trẻ dùng nước súc miệng người lớn?",
          en: "Should children use adult mouthwash?",
          zh: "儿童应该使用成人漱口水吗？",
          ko: "어린이가 성인용 가글액을 사용해도 될까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 1,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Nước súc miệng người lớn có nồng độ cồn và hóa chất cao, không an toàn cho trẻ em.",
          en: "Adult mouthwash has high concentrations of alcohol and chemicals, which are unsafe for children.",
          zh: "成人漱口水含有高浓度的酒精和化学物质，对儿童不安全。",
          ko: "성인용 가글액은 알코올과 화학 물질 농도가 높아 어린이에게 안전하지 않습니다."
        }
      },
      {
        id: 38,
        text: {
          vi: "Phụ huynh có nên kiểm tra răng cho con không?",
          en: "Should parents check their children's teeth?",
          zh: "父母应该检查孩子的牙齿吗？",
          ko: "부모가 자녀의 치아를 확인해야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Cha mẹ nên thường xuyên quan sát răng con để phát hiện sớm các đốm trắng hoặc lỗ sâu.",
          en: "Parents should regularly observe their children's teeth to detect white spots or cavities early.",
          zh: "父母应该定期观察孩子的牙齿，以便尽早发现白斑或龋洞。",
          ko: "부모는 자녀의 치아를 정기적으로 관찰하여 하얀 반점이나 충치를 조기에 발견해야 합니다."
        }
      },
      {
        id: 39,
        text: {
          vi: "Trẻ sợ nha sĩ có nên vẫn đưa đi khám không?",
          en: "Should a child who is afraid of the dentist still go for a check-up?",
          zh: "害怕看牙医的孩子还应该去检查吗？",
          ko: "치과를 무서워하는 아이도 검진을 받으러 가야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Nên đưa trẻ đi khám để trẻ làm quen với môi trường nha khoa, tránh tâm lý sợ hãi sau này.",
          en: "Children should be taken for check-ups to get used to the dental environment and avoid future fear.",
          zh: "应该带孩子去检查，让他们熟悉牙科环境，避免日后产生恐惧心理。",
          ko: "아이들이 치과 환경에 익숙해지고 나중에 두려움을 갖지 않도록 검진을 받으러 가야 합니다."
        }
      },
      {
        id: 40,
        text: {
          vi: "Chăm sóc răng sớm có giúp tiết kiệm chi phí sau này không?",
          en: "Does early dental care help save costs later?",
          zh: "早期牙科护理有助于以后节省费用吗？",
          ko: "조기 치아 관리가 나중에 비용을 절약하는 데 도움이 될까요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["是", "不是"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 0,
        category: {
          vi: "Phụ huynh & Trẻ em",
          en: "Parents & Children",
          zh: "父母与儿童",
          ko: "부모와 자녀"
        },
        explanation: {
          vi: "Phòng bệnh luôn rẻ hơn chữa bệnh. Chăm sóc tốt từ đầu giúp tránh các điều trị tốn kém sau này.",
          en: "Prevention is always cheaper than cure. Good care from the start helps avoid expensive treatments later.",
          zh: "预防总是比治疗便宜。从一开始就做好护理有助于避免以后昂贵的治疗。",
          ko: "예방은 항상 치료보다 저렴합니다. 처음부터 잘 관리하면 나중에 비싼 치료를 피하는 데 도움이 됩니다."
        }
      }
    ]
  },
  {
    id: 'expert',
    title: {
      vi: 'Chuyên gia Nụ cười',
      en: 'Smile Expert',
      zh: '微笑专家',
      ko: '미소 전문가'
    },
    description: {
      vi: 'Thử thách kiến thức nâng cao về nha khoa thẩm mỹ và phục hồi.',
      en: 'Advanced knowledge challenge in aesthetic and restorative dentistry.',
      zh: '美容和修复牙科的高级知识挑战。',
      ko: '미용 및 수복 치의학의 고급 지식 도전.'
    },
    icon: 'Sparkles',
    questions: [
      {
        id: 41,
        text: {
          vi: "Tẩy trắng răng có làm hỏng men răng không?",
          en: "Does teeth whitening damage tooth enamel?",
          zh: "牙齿美白会损坏牙釉质吗？",
          ko: "치아 미백이 치아 법랑질을 손상시키나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Tẩy trắng răng đúng quy trình nha khoa chỉ tác động lên các sắc tố màu, không làm hại men răng.",
          en: "Teeth whitening following correct dental procedures only affects color pigments and does not harm enamel.",
          zh: "按照正确的牙科程序进行牙齿美白仅影响色素，不会伤害牙釉质。",
          ko: "올바른 치과 절차에 따른 치아 미백은 색소에만 영향을 미치며 법랑질을 손상시키지 않습니다."
        }
      },
      {
        id: 42,
        text: {
          vi: "Niềng răng chỉ dành cho trẻ em?",
          en: "Is braces only for children?",
          zh: "牙齿矫正只适合儿童吗？",
          ko: "치아 교정은 어린이만을 위한 것인가요?"
        },
        options: {
          vi: ["Đúng", "Sai"],
          en: ["True", "False"],
          zh: ["对", "错"],
          ko: ["참", "거짓"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Niềng răng có thể thực hiện ở mọi lứa tuổi, miễn là sức khỏe răng nướu cho phép.",
          en: "Braces can be done at any age, as long as the health of teeth and gums allows.",
          zh: "只要牙齿和牙龈健康允许，任何年龄都可以进行牙齿矫正。",
          ko: "치아와 잇몸의 건강이 허락한다면 어떤 연령대에서도 교정이 가능합니다."
        }
      },
      {
        id: 43,
        text: {
          vi: "Răng khôn mọc lệch có cần nhổ không?",
          en: "Do impacted wisdom teeth need to be extracted?",
          zh: "阻生智齿需要拔除吗？",
          ko: "매복 사랑니를 발치해야 할까요?"
        },
        options: {
          vi: ["Cần", "Không cần"],
          en: ["Yes", "No"],
          zh: ["需要", "不需要"],
          ko: ["필요함", "필요 없음"]
        },
        correctAnswer: 0,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Răng khôn mọc lệch gây đau, viêm nhiễm và hỏng răng số 7 bên cạnh, nên cần nhổ bỏ sớm.",
          en: "Impacted wisdom teeth cause pain, infection, and damage to the adjacent 7th tooth, so they should be removed early.",
          zh: "阻生智齿会导致疼痛、感染并损坏相邻的第 7 颗牙齿，因此应尽早拔除。",
          ko: "매복 사랑니는 통증, 감염 및 인접한 7번 치아의 손상을 유발하므로 조기에 발치해야 합니다."
        }
      },
      {
        id: 44,
        text: {
          vi: "Cấy ghép Implant có đau không?",
          en: "Is dental implant surgery painful?",
          zh: "牙科植入手术疼吗？",
          ko: "임플란트 수술이 아픈가요?"
        },
        options: {
          vi: ["Đau", "Không đau"],
          en: ["Painful", "Painless"],
          zh: ["疼", "不疼"],
          ko: ["아픔", "통증 없음"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Với công nghệ hiện đại, cấy ghép Implant diễn ra nhẹ nhàng và ít đau đớn hơn nhiều người nghĩ.",
          en: "With modern technology, dental implant surgery is gentle and much less painful than many think.",
          zh: "凭借现代技术，牙科植入手术非常温和，痛苦比许多人想象的要少得多。",
          ko: "현대 기술을 통해 임플란트 수술은 부드럽게 진행되며 많은 사람들이 생각하는 것보다 훨씬 덜 아픕니다."
        }
      },
      {
        id: 45,
        text: {
          vi: "Răng sứ có bền mãi mãi không?",
          en: "Do porcelain teeth last forever?",
          zh: "瓷牙能永久使用吗？",
          ko: "도자기 치아는 영원히 지속되나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Răng sứ có tuổi thọ cao (10-20 năm) nhưng vẫn cần vệ sinh và kiểm tra định kỳ.",
          en: "Porcelain teeth have a long lifespan (10-20 years) but still require regular cleaning and check-ups.",
          zh: "瓷牙的使用寿命很长（10-20 年），但仍需要定期清洁和检查。",
          ko: "도자기 치아는 수명이 길지만(10-20년) 여전히 정기적인 세척과 검진이 필요합니다."
        }
      },
      {
        id: 46,
        text: {
          vi: "Lấy cao răng có làm răng bị thưa không?",
          en: "Does scaling cause gaps between teeth?",
          zh: "洗牙会导致牙缝变大吗？",
          ko: "스케일링이 치아 사이의 간격을 유발하나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["会", "不会"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Lấy cao răng giúp nướu khỏe mạnh, cảm giác thưa là do mảng bám tích tụ lâu ngày đã được loại bỏ.",
          en: "Scaling helps gums stay healthy; the feeling of gaps is due to the removal of long-term plaque buildup.",
          zh: "洗牙有助于保持牙龈健康；牙缝感是由于清除了长期积累的牙菌斑。",
          ko: "스케일링은 잇몸 건강을 유지하는 데 도움이 됩니다. 틈이 생기는 느낌은 오랫동안 쌓인 플라크가 제거되었기 때문입니다."
        }
      },
      {
        id: 47,
        text: {
          vi: "Có nên nhổ răng sữa sớm khi chưa đến tuổi thay?",
          en: "Should baby teeth be extracted early before the age of replacement?",
          zh: "在换牙年龄之前应该尽早拔掉乳牙吗？",
          ko: "교체 시기 전에 유치를 조기에 발치해야 할까요?"
        },
        options: {
          vi: ["Nên", "Không nên"],
          en: ["Should", "Should not"],
          zh: ["应该", "不应该"],
          ko: ["해야 함", "하지 말아야 함"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Nhổ răng sữa quá sớm có thể làm răng vĩnh viễn mọc lệch lạc do mất định hướng.",
          en: "Extracting baby teeth too early can cause permanent teeth to grow misaligned due to loss of guidance.",
          zh: "过早拔除乳牙会导致恒牙因失去引导而排列不齐。",
          ko: "유치를 너무 일찍 발치하면 안내 부족으로 인해 영구치가 비뚤어지게 자랄 수 있습니다."
        }
      },
      {
        id: 48,
        text: {
          vi: "Hàn răng có vĩnh viễn không?",
          en: "Is dental filling permanent?",
          zh: "补牙是永久性的吗？",
          ko: "치아 충전은 영구적인가요?"
        },
        options: {
          vi: ["Đúng", "Sai"],
          en: ["True", "False"],
          zh: ["对", "错"],
          ko: ["참", "거짓"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Miếng hàn răng có tuổi thọ nhất định và có thể cần thay thế sau vài năm.",
          en: "Dental fillings have a certain lifespan and may need replacement after a few years.",
          zh: "补牙材料有一定的寿命，几年后可能需要更换。",
          ko: "치아 충전재는 수명이 정해져 있으며 몇 년 후에 교체가 필요할 수 있습니다."
        }
      },
      {
        id: 49,
        text: {
          vi: "Viêm nha chu có chữa khỏi hoàn toàn không?",
          en: "Can periodontal disease be completely cured?",
          zh: "牙周病能完全治愈吗？",
          ko: "치주 질환이 완전히 완치될 수 있나요?"
        },
        options: {
          vi: ["Có", "Không"],
          en: ["Yes", "No"],
          zh: ["能", "不能"],
          ko: ["예", "아니오"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "Viêm nha chu gây tiêu xương hàm, điều trị giúp giữ răng và ngăn chặn tình trạng nặng thêm.",
          en: "Periodontitis causes jawbone loss; treatment helps save teeth and prevent the condition from worsening.",
          zh: "牙周炎会导致颌骨流失；治疗有助于保住牙齿并防止病情恶化。",
          ko: "치주염은 턱뼈 손실을 유발합니다. 치료는 치아를 보존하고 상태가 악화되는 것을 방지하는 데 도움이 됩니다."
        }
      },
      {
        id: 50,
        text: {
          vi: "Nha sĩ khuyên nên khám răng bao lâu một lần?",
          en: "How often do dentists recommend check-ups?",
          zh: "牙医建议多久检查一次？",
          ko: "치과 의사는 얼마나 자주 검진을 권장합니까?"
        },
        options: {
          vi: ["3 tháng", "6 tháng", "1 năm", "2 năm"],
          en: ["3 months", "6 months", "1 year", "2 years"],
          zh: ["3 个月", "6 个月", "1 年", "2 年"],
          ko: ["3개월", "6개월", "1년", "2년"]
        },
        correctAnswer: 1,
        category: {
          vi: "Chuyên gia Nụ cười",
          en: "Smile Expert",
          zh: "微笑专家",
          ko: "미소 전문가"
        },
        explanation: {
          vi: "6 tháng là thời gian vàng để phát hiện sớm và xử lý các vấn đề răng miệng.",
          en: "6 months is the golden time for early detection and treatment of oral issues.",
          zh: "6 个月是早期发现和处理口腔问题的黄金时间。",
          ko: "6개월은 구강 문제를 조기에 발견하고 치료할 수 있는 황금기입니다."
        }
      }
    ]
  }
];

export const QUESTIONS: Question[] = QUIZ_SETS.flatMap(set => set.questions);
