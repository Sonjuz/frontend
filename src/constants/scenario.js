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
  scenario_title: "가족을 사칭한 보이스피싱: '급한 사고'를 빌미로 한 금전 요구",
  target_impersonation: '가족(아들)',
  scenario_description:
    '사기범이 발신번호를 조작해 피해자의 아들을 사칭하며, 사고가 났다며 급하게 돈을 요청하는 보이스피싱 시나리오입니다. 사용자가 망설이거나 질문할 때 사기범은 신뢰를 주기 위해 대화하며, 동시에 압박감과 긴박함을 강조해 피해자가 이성적 판단을 하지 못하게 유도합니다.',
  steps: [
    {
      step_number: 1,
      screen_type: 'call',
      messages: [
        {
          sender: 'scammer',
          text: '엄마, 나 지금 급하게 전화했어. 사고가 나서 병원에 와 있는데 핸드폰이 고장 나서, 이 번호로 전화하고 있어.',
          style: '초조하게',
          tts_url: null,
          pitch_shift: 1,
          pitch_variance: 1.2,
          speed: 1.1,
        },
        {
          sender: 'user',
          text: '응? 너 목소리가 좀 다른 것 같은데, 괜찮니?',
          style: '걱정스럽게',
          tts_url: null,
          pitch_shift: 0,
          pitch_variance: 1.0,
          speed: 1.0,
        },
        {
          sender: 'scammer',
          text: '목이 좀 쉬었어, 크게 다친 건 아니니까 엄마 걱정하지 말고! 정말 급해서 그래. 지금 바로 도와줘야 해.',
          style: '간절하게',
          tts_url: null,
          pitch_shift: 1,
          pitch_variance: 1.3,
          speed: 1.1,
        },
      ],
    },
    {
      step_number: 2,
      screen_type: 'message',
      messages: [
        {
          sender: 'scammer',
          text: '엄마, 시간 없어. 이 계좌로 300만 원만 빨리 보내줘! 조금 있으면 간호사분이 계좌번호 보내줄 거야.',
        },
        {
          sender: 'scammer',
          text: '국민은행 123456-78-91011 김철수. 꼭 빨리 부탁해. 나중에 설명할게.',
        },
      ],
    },
    {
      step_number: 3,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text: '바로 송금해준다.',
          is_correct: false,
          result_message:
            '아쉽지만 이런 경우 피해금이 고스란히 사기범에게 넘어갈 수 있습니다. 급박하게 돈을 요구하는 연락은 반드시 건강/안부부터 확인하고 가족에게 다시 직접 연락해 보세요.',
          next_step: 4,
          education_point:
            '충동적으로 돈을 보내기 전, 가족 본인인지 여러 방법(직접 전화, 주변에 확인 등)으로 진위여부를 검증해야 합니다.',
        },
        {
          choice_id: 'B',
          choice_text: '다른 가족에게 아들의 상황을 물어본다.',
          is_correct: true,
          result_message:
            '매우 현명한 대처입니다. 주변 가족에게 확인하면 사기라는 사실을 쉽게 알 수 있습니다. 혼자 결정하지 말고 꼭 가족과 상의하세요.',
          next_step: 4,
          education_point:
            '의심스러운 상황에서는 반드시 제 3자(가족/지인 등) 확인 절차를 거치는 습관을 가져야 합니다.',
        },
        {
          choice_id: 'C',
          choice_text: '왜 필요한지 자세히 물어본다.',
          is_correct: true,
          result_message:
            '좋은 접근입니다! 상황을 더 구체적으로 물어보면 사기범이 당황하거나 횡설수설할 수 있습니다. 의심스러운 부분은 절대 그냥 넘어가지 마세요.',
          next_step: 4,
          education_point:
            '돈을 요구받는 상황에서 상세한 이유와 상황 설명을 요구하면, 사기범은 당황하거나 대답을 회피할 수 있습니다.',
        },
      ],
    },
    {
      step_number: 4,
      screen_type: 'call',
      messages: [
        {
          sender: 'user',
          text: '정말 무슨 사고인데? 지금 어디에 있는 거야? 목소리도 평소랑 다른 것 같아.',
          style: '의심하며',
          tts_url: null,
          pitch_shift: 0,
          pitch_variance: 1.1,
          speed: 1.0,
        },
        {
          sender: 'scammer',
          text: '엄마, 나 빨리 치료 받아야 된대. 지금 바로 돈 입금 안 되면 더 큰일이래. 병원에 오래 있을 수 없어. 엄마, 제발 믿고 조금만 도와줘. 곧 경찰이 올 수도 있다고 했어.',
          style: '긴장하며',
          tts_url: null,
          pitch_shift: 2,
          pitch_variance: 1.5,
          speed: 1.15,
        },
        {
          sender: 'user',
          text: '아니, 먼저 아빠한테도 얘기해볼게. 그리고 네 친구에게도 전화해볼게.',
          style: '침착하게',
          tts_url: null,
          pitch_shift: 0,
          pitch_variance: 1.0,
          speed: 1.0,
        },
      ],
    },
    {
      step_number: 5,
      screen_type: 'message',
      messages: [
        {
          sender: 'scammer',
          text: '엄마, 지금 바로 안 보내주면 나 정말 곤란해져. 이것만 해결해주면 나중에 바로 전화할게! 믿어줘.',
        },
      ],
    },
    {
      step_number: 6,
      screen_type: 'choice',
      choices: [
        {
          choice_id: 'A',
          choice_text: '다시 한 번 아들에게 영상통화를 요청한다.',
          is_correct: true,
          result_message:
            '아주 좋은 방법입니다. 사기범은 영상통화를 회피하거나 끊을 수밖에 없으니 실제 가족과 확인하는 것이 가장 확실합니다.',
          next_step: 'end_safe',
          education_point:
            '음성만으로는 신원을 쉽게 속일 수 있으니, 꼭 영상통화나 SNS 등으로 추가 확인을 요청해야 합니다.',
        },
        {
          choice_id: 'B',
          choice_text: '사기가 아닌 것 같으니 바로 송금한다.',
          is_correct: false,
          result_message:
            '안타깝게도 이런 상황에서는 급박함에 속아 송금할 위험이 큽니다. 항상 본인의 안전과 재산을 먼저 생각해야 합니다.',
          next_step: 'end_fraud',
          education_point:
            '긴급한 사고/금전 요구는 대부분 사기일 가능성이 높으니, 확인 없는 송금은 매우 위험합니다.',
        },
        {
          choice_id: 'C',
          choice_text:
            '잠시 뒤 다시 연락하겠다고 하고, 직접 아들에게 원래 번호로 전화를 걸어본다.',
          is_correct: true,
          result_message:
            '아주 현명한 대처입니다. 가족의 기존 번호로 직접 확인하면 사기범의 의도를 막을 수 있습니다.',
          next_step: 'end_safe',
          education_point:
            '의심되는 전화는 즉각 종료하고, 반드시 저장된 가족 번호로 다시 연락해 진위를 확인하세요.',
        },
      ],
    },
  ],
  educational_summary:
    "가족을 사칭해 급박한 상황을 연출하며 금전을 요구하는 보이스피싱 수법은 고령자에게 매우 빈번하게 시도됩니다. 사기범은 피해자가 판단할 틈을 주지 않으려고 신뢰를 쌓고, 불안감을 자극하며, 신속하게 행동하도록 압박합니다. 이런 상황에서 '침착하게' 직접 가족·지인에게 확인하는 습관을 가져야 피해를 예방할 수 있습니다.",
  prevention_tips: [
    '갑작스러운 금전 요구나 사고 소식이 오면, 본인 확인을 위해 영상통화나 직접 가족에게 연락하세요.',
    '모르는 번호나 불분명한 상황에서 송금하지 말고, 반드시 주변 가족/지인에게 먼저 확인하세요.',
    '사기범은 급박함과 신뢰를 동시에 강조합니다. 침착함을 잃지 않고 논리적인 질문으로 상대를 테스트하세요.',
  ],
};
