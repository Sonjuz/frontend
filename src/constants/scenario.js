export const SMISHING_SCENARIO = {
  fraud_type: 'smishing',
  scenario_title: '택배회사 사칭 문자로 개인정보를 요구하는 사기',
  target_impersonation: '택배회사',
  scenario_description:
    '고령 사용자가 택배 배송 알림으로 사칭된 문자(SMS)를 받고, 사기범이 단계적으로 신뢰를 쌓고 심리적 압박을 가하며 개인정보를 요구하는 현실적인 사기 시나리오입니다. 모든 단계에서 망설임, 질문, 사기범의 설득과 압박이 포함되어 있습니다.',
  steps: [
    {
      step_number: 1,
      screen_type: 'call',
      messages: [
        {
          sender: 'scammer',
          text: '안녕하세요, 고객님. 저희 OO택배입니다. 오늘 소포가 배송될 예정인데, 받으실 주소가 맞는지 확인 전화드렸습니다.',
        },
        { sender: 'user', text: '네? 택배요? 제가 시킨 적이 있나...' },
        {
          sender: 'scammer',
          text: '요즘 비슷한 이름의 수취인이 많아서 실수로 반송되거나, 주소 오류로 배송이 안 되는 경우가 많습니다. 혹시 주소 확인을 위해 조금만 시간 괜찮으실까요?',
        },
      ],
    },
    {
      step_number: 2,
      screen_type: 'message',
      messages: [
        {
          sender: 'scammer',
          text: '[OO택배] 고객님, 배송 주소 확인이 필요합니다. 아래 링크를 클릭하여 주소와 개인 정보를 입력해 주세요. http://oodelivery-korea.com/verify',
        },
      ],
    },
    {
      step_number: 3,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text: '링크를 바로 클릭한다.',
          is_correct: false,
          result_message:
            '이런! 실제로 사기 메시지에서 제공하는 링크는 악성 사이트일 수 있습니다. 개인정보 유출 및 금전적 피해로 이어질 수 있습니다.',
          next_step: 4,
          education_point:
            '출처가 불분명한 링크는 절대로 클릭하지 말고, 공식 홈페이지 또는 앱을 직접 방문해야 합니다.',
        },
        {
          choice_id: 'B',
          choice_text: '문자가 수상하니 가족에게 먼저 문의한다.',
          is_correct: true,
          result_message:
            '아주 현명한 선택입니다! 이해가 가지 않거나 의심되는 문자는 주변 가족, 자녀, 혹은 지인에게 꼭 문의하세요.',
          next_step: 4,
          education_point:
            '의심스러운 상황에서 혼자 판단하지 말고, 반드시 가족이나 가까운 사람과 상의하는 것이 피해 예방에 큰 도움이 됩니다.',
        },
        {
          choice_id: 'C',
          choice_text: '택배회사에 직접 전화해 확인한다.',
          is_correct: true,
          result_message:
            '정확한 대응입니다. 사칭 전화를 받았다면, 직접 인터넷에 검색하거나 기존에 알고 있는 공식 번호로 전화하세요.',
          next_step: 4,
          education_point:
            '문자 내 연락처나 링크가 아닌 공식 홈페이지나 콜센터 전화번호를 이용해 직접 사실 여부를 확인하세요.',
        },
      ],
    },
    {
      step_number: 4,
      screen_type: 'call',
      messages: [
        {
          sender: 'user',
          text: '저 링크를 바로 눌러도 되는 건가요? 요즘 이런 것 때문에 피해 봤다는 뉴스도 봤는데...',
        },
        {
          sender: 'scammer',
          text: '(조금 더 친근하게) 걱정하지 마세요, 고객님. 저희 회사 정식 발신이고, 이전에도 많이들 입력하셨거든요. 혹시 걱정되시면 신분증 번호와 연락처만 입력해 주셔도 돼요. 그래야 배송이 지연되지 않습니다.',
        },
        { sender: 'user', text: '음... 신분증 번호까지 꼭 필요한가요?' },
        {
          sender: 'scammer',
          text: '(살짝 압박하며) 최근 명의 도용 사고가 많아서, 본인 확인 없이는 절대 배송이 안 됩니다. 오늘 중으로 입력해 주셔야 상품이 반송되지 않습니다.',
        },
      ],
    },
    {
      step_number: 5,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text:
            '걱정되지만, 계속 압박을 느껴 정보(주민번호 등)를 입력한다.',
          is_correct: false,
          result_message:
            '앗, 이런! 사기범들은 불안감을 조장해서 개인정보를 빼내는 수법을 자주 씁니다. 그대로 입력할 경우 큰 피해를 볼 수 있어요.',
          next_step: 6,
          education_point:
            '상대방이 빨리 처리해야 한다며 압박할수록 더욱 침착하게 공식 채널을 확인하거나, 사실 여부를 가족 또는 지인과 꼭 상의하세요.',
        },
        {
          choice_id: 'B',
          choice_text:
            '명확한 근거가 없으니 한 번 더 확인하겠다며 입력을 거부한다.',
          is_correct: true,
          result_message:
            '아주 잘 하셨어요! 사기범들은 빨리 입력하라고 다그칠수록 더욱 의심해야 합니다.',
          next_step: 7,
          education_point:
            '어떤 상황에서도 주민등록번호, 신분증 번호 등 주요 개인정보는 링크를 통해 입력하면 안 됩니다.',
        },
      ],
    },
    {
      step_number: 6,
      screen_type: 'message',
      messages: [
        {
          sender: 'scammer',
          text: '[OO택배] 입력해 주셔서 감사합니다. 곧 배송이 시작됩니다.',
        },
        { sender: 'user', text: '아... 괜찮은 건가? 그래도 찝찝하네...' },
        {
          sender: 'message_system',
          text: '[며칠 뒤] 개인정보가 유출되어 금융피해가 발생할 수 있습니다. 즉시 가족, 금융회사, 경찰에 신고하세요.',
        },
      ],
    },
    {
      step_number: 7,
      screen_type: 'call',
      messages: [
        {
          sender: 'scammer',
          text: '(불친절하게) 입력을 안 하시면 오늘 택배가 반송되고, 배송료도 따로 발생할 수 있습니다. 정말 괜찮으시겠어요?',
        },
        {
          sender: 'user',
          text: '그래도 정식 콜센터에 한 번 더 문의하고 결정하겠습니다. 죄송합니다.',
        },
        {
          sender: 'scammer',
          text: '(초조하게) 고객님, 조금만 빨리 입력해 주시면 바로 배송 처리가 되는데...',
        },
        { sender: 'user', text: '아닙니다. 가족과 먼저 상의하겠습니다.' },
      ],
    },
  ],
  educational_summary:
    '택배회사 사칭 스미싱은 신뢰를 유도하며 개인정보를 빼내려는 수법을 사용합니다. 출처가 불분명한 문자나 전화, 링크를 절대 믿지 말고, 개인정보를 요구할 때는 반드시 공식적으로 확인하고, 가족이나 가까운 이와 꼭 상의해야 합니다.',
  prevention_tips: [
    '공식 홈페이지나 번호 이외에는 개인정보를 입력하지 마세요.',
    '수상한 문자, 전화는 가족과 꼭 상의하세요.',
    '출처 불명의 링크, 첨부파일은 절대 클릭하지 마세요.',
    '사칭 전화·문자에서 압박을 받더라도 침착하게 사실 여부를 한 번 더 확인하세요.',
    '금융/개인정보 유출 우려가 들면 바로 경찰서(112), 금융회사, 가족에게 연락하세요.',
  ],
};

export const VOICE_PHISHING_SCENARIO = {
  fraud_type: 'voicephishing',
  scenario_title: '내가 아들이야! 가족을 사칭한 보이스피싱',
  target_impersonation: '가족(아들)',
  scenario_description:
    "고령자인 사용자가 사기범에게 전화를 받고, 발신번호가 조작되어 아들의 번호로 걸려온 전화에서 '아들'을 사칭한 보이스피싱범이 긴급한 상황을 가장해 금전을 요구하는 시나리오입니다. 사기범은 아들을 사칭하며 심리적 압박과 신뢰를 쌓으려 하며, 실제 메시지로 계좌번호를 안내한 뒤 금전을 보내라고 종용합니다. 사용자는 여러 번 질문하거나 망설이며, 각 단계에서 교육적인 선택지가 주어집니다.",
  steps: [
    {
      step_number: 1,
      screen_type: 'call',
      messages: [
        {
          sender: 'scammer',
          text: '(불안한 목소리로) 엄마(아빠), 나야. 나 아들이야. 지금 휴대폰이 고장나서 친구폰으로 급하게 전화했어.',
        },
        {
          sender: 'user',
          text: '어, 목소리가 좀 다른 것 같은데? 정말 우리 아들이니?',
        },
        {
          sender: 'scammer',
          text: '응, 엄마(아빠), 지금 감기 걸려서 목소리가 안 좋아. 중요한 일이 있어서 빨리 얘기해야 해. 정말 급해.',
        },
      ],
    },
    {
      step_number: 2,
      screen_type: 'call',
      messages: [
        { sender: 'user', text: '무슨 일인데 그래? 괜찮니?' },
        {
          sender: 'scammer',
          text: '나 지금 교통사고가 났어. 휴대폰도 고장나고, 상대방이랑 합의금 문제 때문에 너무 급해. 이 일 잘못되면 경찰서에도 갈 수 있어서 엄마(아빠)한테밖에 연락할 데가 없어.',
        },
        { sender: 'user', text: '어머, 많이 다쳤니? 어디에 있는데?' },
      ],
    },
    {
      step_number: 3,
      screen_type: 'message',
      messages: [
        {
          sender: 'scammer',
          text: '[카카오톡/문자] 엄마(아빠), 여기로 합의금 보내야 돼. 상대방 변호사 계좌야. 빨리 안 보내면 경찰서 간다고 계속 협박해. (하나은행 123-456789-00 홍길동)',
        },
      ],
    },
    {
      step_number: 4,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text: '바로 돈을 보낼 준비를 한다.',
          is_correct: false,
          result_message:
            '너무 당황하고 걱정될 수 있지만, 바로 돈을 보내기 전에 반드시 사실 확인이 필요해요.',
          next_step: 5,
          education_point:
            '사기범은 급박한 상황을 만들어 곧바로 돈을 보내도록 심리적 압박을 줍니다. 실제 가족이 맞는지 직접 연락해 확인하는 습관이 필요합니다.',
        },
        {
          choice_id: 'B',
          choice_text:
            '잠시만 기다리라고 하고 아들에게 원래 쓰던 번호로 전화를 걸어본다.',
          is_correct: true,
          result_message:
            '정답입니다! 사기 상황에서는 침착하게 가족에게 직접 전화해서 사실을 확인해야 합니다.',
          next_step: 6,
          education_point:
            '사칭범은 휴대폰 고장, 감기 등으로 목소리나 연락방법이 평소와 다를 경우가 많습니다. 직접 연결로 사실을 재확인하는 것이 가장 안전합니다.',
        },
        {
          choice_id: 'C',
          choice_text: '계좌 주인의 이름을 검색해서 수상하지 않은지 찾아본다.',
          is_correct: true,
          result_message:
            '아주 좋은 선택이에요! 계좌번호와 예금주 정보를 검색하면 보이스피싱 관련 신고기록이 있을 수 있습니다.',
          next_step: 6,
          education_point:
            '예금주 검색, 계좌 확인 등 간단한 인터넷 검색으로 보이스피싱 신고 사례가 드러나는 경우가 많으므로 실천해 보세요.',
        },
      ],
    },
    {
      step_number: 5,
      screen_type: 'call',
      messages: [
        {
          sender: 'user',
          text: '여기 계좌에 바로 보내면 되는 거니? 왜 너랑 직접 통화가 안 돼?',
        },
        {
          sender: 'scammer',
          text: '(초조하게) 엄마(아빠), 내 핸드폰이 완전히 고장이라 친구 폰도 지금 곧 돌려줘야 해. 경찰이 올 수도 있어서 빨리 보내야 해. 엄마(아빠)만 믿고 있어.',
        },
        {
          sender: 'user',
          text: '그래도 목소리가 너무 달라. 정말 우리 아들이니?',
        },
        {
          sender: 'scammer',
          text: '(화난 목소리로 압박) 엄마(아빠), 지금 내가 얼마나 다급한지 몰라? 경찰서 가게 해도 돼? 믿을 사람이 엄마(아빠)밖에 없어!',
        },
      ],
    },
    {
      step_number: 6,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text: '불안해서 보냈던 돈을 바로 이체한다.',
          is_correct: false,
          result_message:
            '겁을 주고 조급하게 재촉하는 건 사기범의 전형적인 수법입니다. 절대 서두르지 마세요.',
          next_step: 'end_fraud',
          education_point:
            '사기범은 심리적 압박(협박, 초조함 등)으로 냉정한 판단을 흐리게 만듭니다. 의심이 들면 멈추고, 주변에 도움을 요청하세요.',
        },
        {
          choice_id: 'B',
          choice_text: '가족과 먼저 직접 통화로 사실을 확인한다.',
          is_correct: true,
          result_message:
            '잘 선택하셨어요! 안전이 최우선입니다. 가족과 직접 통화로 사실관계를 확인해야만 합니다.',
          next_step: 'end_safe',
          education_point:
            '최대한 침착하게, 가족에게 본인이 직접 연락해 사실확인이 될 때까지 절대 돈을 송금하지 마세요.',
        },
      ],
    },
  ],
  educational_summary:
    '이 시나리오를 통해 가족을 사칭한 보이스피싱의 주요 유형과 심리적 압박 전략을 경험했습니다. 목소리나 상황이 평소와 다르거나, 급하게 돈을 보내라는 요구가 있다면 반드시 직접 확인하고, 잠시 멈춘 후 주변과 상의하는 것이 필요합니다.',
  prevention_tips: [
    '가족, 친지로부터 갑작스런 금전요구가 오면 반드시 평소 사용하던 번호로 직접 전화해서 확인하세요.',
    '휴대폰 고장, 급한 사고, 합의금 등 긴급 상황을 조작하는 이야기는 대부분 사기 가능성이 크므로 즉시 송금하지 마세요.',
    '받은 계좌번호, 예금주 등을 인터넷(사기 계좌 신고 사이트 등)에서 검색해 보이스피싱 신고 사례를 찾아보세요.',
    '초조하게 만들거나 압박하는 전화·문자에 현혹되지 않고, 주변 가족 또는 경찰 등 공식 기관과 상담하세요.',
    '금전이체를 요구하는 전화나 문자는, 실제 본인 여부·사실 여부를 확인한 후 신중하게 결정하세요.',
  ],
};
