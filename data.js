// data.js
export const appData = { 
    credentials: [
        { username: 'admin', password: 'admin' },
        { username: 'manager', password: 'manager' } // Учетная запись сотрудника
    ], 
    
    // ДИНАМИЧЕСКАЯ СТРУКТУРА МЕНЮ
    appMenu: {
        "greeting": { templateKey: "greetings", labelKey: "greetingButtonLabel" },
        "job": { templateKey: "jobDescriptions", labelKey: "jobDescButtonLabel" },
        "jobprime": { templateKey: "jobDescriptionsPrime", labelKey: "jobPrimeButtonLabel" },
        "flirt": { templateKey: "flirtClosings", labelKey: "flirtButtonLabel" },
        "contact": { templateKey: "contacts", labelKey: "contactButtonLabel" }
    },

    i18n: { 
        en: { 
            loginHeader: "ChaterLab", loginSubheader: "Quick Replies Panel", loginPlaceholder: "Login", passwordPlaceholder: "Password", loginButton: "Log In", 
            appHeader: "ChaterLab Quick Replies", repliesTab: "Replies", instructionsTab: "Instructions", 
            englishSection: "English Content", russianSection: "Russian Content", logoutButtonText: "Log Out", 
            aboutHeader: "About this tool", aboutText: "This panel allows you to quickly copy professional greetings, job descriptions, test assignments, and contacts for ChaterLab. Click any button to copy the text to your clipboard.", 
            instructionHeader: "📖 Instruction", errorInvalid: "Invalid credentials. Please contact your manager.", 
            toastMessage: "Copied", searchPlaceholder: "Search...", darkModeLabel: "Dark Mode", 
            greetingButtonLabel: "Greeting", jobDescButtonLabel: "Job Description", jobPrimeButtonLabel: "Job Description (Prime)", flirtButtonLabel: "Flirt Task", contactButtonLabel: "Contact", 
        }, 
        ru: { 
            loginHeader: "ChaterLab", loginSubheader: "Панель быстрых ответов", loginPlaceholder: "Логин", passwordPlaceholder: "Пароль", loginButton: "Войти", 
            appHeader: "ChaterLab Quick Replies", repliesTab: "Ответы", instructionsTab: "Инструкция", 
            englishSection: "Английский контент", russianSection: "Русский контент", logoutButtonText: "Выйти", 
            aboutHeader: "О панели", aboutText: "Эта панель позволяет быстро копировать профессиональные приветствия, описание вакансии, тестовое задание и контакты для ChaterLab. Нажмите любую кнопку, чтобы скопировать текст в буфер обмена.", 
            instructionHeader: "📖 Инструкция для работы", errorInvalid: "Неверные данные. Свяжитесь с менеджером.", 
            toastMessage: "Скопировано", searchPlaceholder: "Поиск...", darkModeLabel: "Тёмная тема", 
            greetingButtonLabel: "Приветствие", jobDescButtonLabel: "Описание вакансии", jobPrimeButtonLabel: "Описание вакансии (Прайм)", flirtButtonLabel: "Флирт-задание", contactButtonLabel: "Контакт", 
        },
         uk: { 
            loginHeader: "ChaterLab", loginSubheader: "Панель швидких відповідей", loginPlaceholder: "Логін", passwordPlaceholder: "Пароль", loginButton: "Увійти", 
            appHeader: "ChaterLab Quick Replies", repliesTab: "Відповіді", instructionsTab: "Інструкція", 
            englishSection: "Англійський контент", russianSection: "Російський контент", logoutButtonText: "Вийти", 
            aboutHeader: "Про панель", aboutText: "Ця панель дозволяє швидко копіювати професійні привітання, опис вакансії, тестове завдання та контакти для ChaterLab. Натисніть будь-яку кнопку, щоб скопіювати текст у буфер обміну.", 
            instructionHeader: "📖 Інструкція для роботи", errorInvalid: "Невірні дані. Зв'яжіться з менеджером.", 
            toastMessage: "Скопійовано", searchPlaceholder: "Пошук...", darkModeLabel: "Темна тема", 
            greetingButtonLabel: "Привітання", jobDescButtonLabel: "Опис вакансії", jobPrimeButtonLabel: "Опис вакансії (Прайм)", flirtButtonLabel: "Флірт-завдання", contactButtonLabel: "Контакт", 
        }
    }, 
    templates: { 
        en: { 
            greetings: [ 
                "Good day! We are ChaterLab. Do you have experience working in marriage agencies?",
                "Good day! This is ChaterLab. Have you ever worked in marriage agencies?",
                "Good day! ChaterLab would like to know if you have experience in marriage agencies?",
                "Good day! Representing ChaterLab. Have you previously worked in marriage agencies?",
                "Good day! We are ChaterLab. Are you experienced in marriage agencies?",
                "Good day! This is ChaterLab. Have you been involved with marriage agencies before?",
                "Good day! ChaterLab is interested in your experience with marriage agencies.",
                "Good day! We represent ChaterLab. Have you ever worked in marriage agencies?",
                "Good day! ChaterLab asks if you have prior experience in marriage agencies.",
                "Good day! We are ChaterLab. Have you worked with marriage agencies before?",
                "Good day! Representing ChaterLab. Do you have any experience in marriage agencies?",
                "Good day! ChaterLab would like to know about your experience in marriage agencies.",
                "Good day! We are ChaterLab. Have you got experience in marriage agencies?",
                "Good day! This is ChaterLab. Have you worked in marriage agencies previously?",
                "Good day! ChaterLab asks if you have experience working in marriage agencies."
            ], 
            jobDescriptions: [ 
                `Job Description:\n📌 Task: Communicate with foreign men on behalf of girls. All interaction is via chat and letters, no in-person meetings required.\n📌 Topic: Flirting and dating.\n📌 Goal: Gifts, organizing the man's visit, and meetings—without personal involvement.\n📌 Requirements: Laptop and high-speed internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: After first week, then on the 20th of each month.\n💵 Rate: 40% of correspondence balance.\nWhich shift suits you?`,
                `Job Description:\n📌 Main task: Chat with foreign men as a representative of girls. Messages are paid individually. No face-to-face meetings.\n📌 Topic: Flirt and social communication.\n📌 Goal: Gifts, facilitating the man's visit, meetings without your presence.\n📌 Requirements: Laptop, stable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: After first week and on the 20th each month.\n💵 Rate: 40%.\nChoose your preferred shift.`,
                `Job Description:\n📌 Task: Professional messaging with foreign men on behalf of girls. No in-person meetings.\n📌 Topic: Flirt, online dating.\n📌 Goal: Gifts, organize visits and meetings, without personal participation.\n📌 Requirements: Laptop, fast internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: Weekly after first week, then monthly.\n💵 Rate: 40%.\nWhich shift works best?`,
                `Job Description:\n📌 Core task: Chat with foreign men as a girl’s representative. No physical meetings, paid per message.\n📌 Topic: Flirt, dating conversations.\n📌 Goal: Gifts, manage visits and meetings, without your attendance.\n📌 Requirements: Laptop, stable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: After first week, then monthly.\n💵 Rate: 40%.\nPick your preferred shift.`,
                `Job Description:\n📌 Task: Messaging foreign men on behalf of girls. Payment per message. No in-person meetings.\n📌 Topic: Flirt and online dating.\n📌 Goal: Gifts, coordinating visits and meetings without personal participation.\n📌 Requirements: Laptop, reliable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: After first week, then on 20th.\n💵 Rate: 40%.\nWhich shift suits you?`,
                `Job Description:\n📌 Task: Conduct chat conversations on behalf of girls. No face-to-face meetings.\n📌 Topic: Flirting, dating.\n📌 Goal: Gifts and managing men’s visits without your personal involvement.\n📌 Requirements: Laptop, fast internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: Weekly, then monthly.\n💵 Rate: 40%.\nChoose your shift.`,
                `Job Description:\n📌 Task: Messaging foreign men from girls’ accounts. No in-person interactions.\n📌 Topic: Flirt, online communication.\n📌 Goal: Gifts, visits, meetings—without personal involvement.\n📌 Requirements: Laptop, stable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: After first week, then monthly.\n💵 Rate: 40%.\nSelect your shift.`,
                `Job Description:\n📌 Task: Chat professionally with foreign men as a girl’s representative. Messages paid individually. No meetings required.\n📌 Topic: Flirt, dating.\n📌 Goal: Gifts, organize visits and meetings without personal attendance.\n📌 Requirements: Laptop, high-speed internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: After first week, then 20th.\n💵 Rate: 40%.\nWhich shift works best?`,
                `Job Description:\n📌 Task: Conduct online conversations with foreign men on behalf of girls. No in-person meetings.\n📌 Topic: Flirt, romance.\n📌 Goal: Gifts and facilitating visits without candidate’s presence.\n📌 Requirements: Laptop, internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: After first week and monthly.\n💵 Rate: 40%.\nPick your preferred shift.`,
                `Job Description:\n📌 Task: Professional chat with foreign men on behalf of girls. Payment per message. No physical meetings.\n📌 Topic: Flirt and dating.\n📌 Goal: Gifts, organize visits and meetings without personal involvement.\n📌 Requirements: Laptop, reliable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: Weekly, then monthly.\n💵 Rate: 40%.\nWhich shift suits you?`,
                `Job Description:\n📌 Task: Messaging foreign men as a girls’ representative. All work is online, no in-person meetings.\n📌 Topic: Flirt, online dating.\n📌 Goal: Gifts, coordinating visits and meetings without personal participation.\n📌 Requirements: Laptop, internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: After first week and 20th.\n💵 Rate: 40%.\nChoose your shift.`,
                `Job Description:\n📌 Task: Conduct online conversations with foreign men on behalf of girls. Messages paid individually. No personal meetings.\n📌 Topic: Flirt and romance.\n📌 Goal: Gifts, organize visits and meetings without your attendance.\n📌 Requirements: Laptop, fast internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Internship: 1-7 days.\n💵 Payment: Weekly, then monthly.\n💵 Rate: 40%.\nWhich shift works for you?`,
                `Job Description:\n📌 Task: Chat on behalf of girls with foreign men. Payment per message. No in-person meetings required.\n📌 Topic: Flirt, dating communication.\n📌 Goal: Gifts, coordinate visits and meetings without personal involvement.\n📌 Requirements: Laptop, internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: After first week and 20th.\n💵 Rate: 40%.\nPick your shift.`,
                `Job Description:\n📌 Task: Chat professionally with foreign men as a representative of girls. No in-person meetings.\n📌 Topic: Flirt, romance.\n📌 Goal: Gifts, manage visits and meetings without personal attendance.\n📌 Requirements: Laptop, fast internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6/1 week (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: Weekly, then monthly.\n💵 Rate: 40%.\nWhich shift do you prefer?`,
                `Job Description:\n📌 Task: Professional messaging with foreign men on behalf of girls. All correspondence online, no in-person meetings.\n📌 Topic: Flirt and dating.\n📌 Goal: Gifts, organize visits and meetings without attending personally.\n📌 Requirements: Laptop, reliable internet.\n📌 Schedule: 6:00 AM - 2:00 PM, 2:00 PM - 10:00 PM, 10:00 PM - 6:00 AM, 6 days/week, 1 day off (Philippines time)\n💵 Paid internship: 1-7 days.\n💵 Payment: After first week and 20th.\n💵 Rate: 40%.\nWhich shift fits you best?`
            ], 
            jobDescriptionsPrime: [
                `Описание вакансии:
📌 Задача: Ведение переписки с иностранными мужчинами от имени девушек. Личные встречи не требуются.
📌 Тематика: Флирт и знакомства.
📌 Цель: Получение подарков, организация приезда мужчины и встречи, без участия кандидата.
📌 Требования: Высокоскоростной интернет и ноутбук.
📌 График работы: 14:00–22:00, 22:00–06:00, 6 дней в неделю, 1 выходной (Kyiv time)
💵 Стажировка: 1-7 дней.
💵 Выплаты: После первой недели, далее 20 числа.
💵 Ставка: 40% от переписки.
Какой график вам подходит?`,
                `Описание вакансии:\n📌 Основная задача: Переписка с иностранными мужчинами от лица девушек. Оплата за каждое сообщение. Личных встреч нет.\n📌 Тематика общения: Флирт и романтическое общение.\n📌 Цель: Подарки, организация приезда мужчины, встречи без личного участия кандидата.\n📌 Требования: Ноутбук, стабильный интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и ежемесячно 20 числа.\n💵 Ставка: 40%.\nВыберите удобный график.`,
                `Описание вакансии:\n📌 Задача: Ведение переписки с иностранными мужчинами от имени девушек, оплата за каждое сообщение. Кандидат не участвует во встречах.\n📌 Тематика: Знакомства, флирт.\n📌 Цель: Подарки, приезд мужчины и встречи, без личного участия.\n📌 Требования: Ноутбук, быстрый интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели, далее 20 числа.\n💵 Ставка: 40%.\nКакой график вам удобен?`,
                `Описание вакансии:\n📌 Основная работа: Переписка от лица девушек с иностранными мужчинами. Оплата за сообщения. Личных встреч нет.\n📌 Тематика: Флирт, знакомства.\n📌 Цель: Подарки, организация приезда мужчины и встречи без участия кандидата.\n📌 Требования: Ноутбук и интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели, далее 20 числа.\n💵 Ставка: 40%.\nКакой график вам подходит?`,
                `Описание вакансии:\n📌 Задача: Профессиональная переписка с иностранными мужчинами от имени девушек. Личные встречи не требуются.\n📌 Тематика: Знакомства и флирт.\n📌 Цель: Подарки, контроль приезда мужчины и встреч, без личного участия.\n📌 Требования: Ноутбук, стабильный интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nКакой график будет удобен?`,
                `Описание вакансии:\n📌 Задача: Ведение переписки от имени девушек с иностранными мужчинами, оплата за каждое сообщение. Встречи не требуются.\n📌 Тематика: Флирт, романтическое общение.\n📌 Цель: Подарки и организация приезда мужчины без участия кандидата.\n📌 Требования: Ноутбук, быстрый интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и далее 20 числа.\n💵 Ставка: 40%.\nВыберите график.`,
                `Описание вакансии:\n📌 Основная задача: Переписка с иностранными мужчинами от имени девушек. Личных встреч нет.\n📌 Тематика: Флирт и знакомства.\n📌 Цель: Подарки, контроль приезда мужчины и встреч, без участия кандидата.\n📌 Требования: Ноутбук и быстрый интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели, далее 20 числа.\n💵 Ставка: 40%.\nКакой график вам подходит?`,
                `Описание вакансии:\n📌 Задача: Переписка с иностранными мужчинами от лица девушек, оплата за каждое сообщение. Кандидат не посещает встречи.\n📌 Тематика: Знакомства и флирт.\n📌 Цель: Подарки, организация приезда мужчины и встреч без участия кандидата.\n📌 Требования: Ноутбук, интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nВыберите график.`,
                `Описание вакансии:\n📌 Основная работа: Переписка от имени девушек с иностранными мужчинами. Личных встреч нет, оплата за каждое сообщение.\n📌 Тематика: Флирт, романтическое общение.\n📌 Цель: Подарки, приезд мужчины и встречи без участия кандидата.\n📌 Требования: Ноутбук и быстрый интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nКакой график удобен?`,
                `Описание вакансии:\n📌 Задача: Ведение переписки с иностранными мужчинами от имени девушек, оплата за сообщения. Встречи не требуются.\n📌 Тематика: Знакомства и флирт.\n📌 Цель: Подарки и организация приезда мужчины без участия кандидата.\n📌 Требования: Ноутбук, стабильный интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nВыберите график.`,
                `Описание вакансии:\n📌 Основная задача: Переписка с иностранными мужчинами от лица девушек. Оплата за каждое сообщение, личные встречи не требуются.\n📌 Тематика: Флирт, знакомства.\n📌 Цель: Подарки, контроль приезда мужчины и встречи без участия кандидата.\n📌 Требования: Ноутбук, интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nКакой график удобен?`,
                `Описание вакансии:\n📌 Задача: Переписка с иностранными мужчинами от имени девушек. Личных встреч нет.\n📌 Тематика: Флирт и знакомства.\n📌 Цель: Подарки, организация приезда мужчины без участия кандидата.\n📌 Требования: Ноутбук, стабильный интернет.\n📌 График работы: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nВыберите график.`,
                `Описание вакансии:\n📌 Основная задача: Ведение переписки с иностранными мужчинами от лица девушек. Личные встречи не требуются.\n📌 Тематика: Флирт и романтическое общение.\n📌 Цель: Подарки, контроль приезда мужчины и встреч без участия кандидата.\n📌 Требования: Ноутбук и интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nКакой график удобен?`,
                `Описание вакансии:\n📌 Задача: Переписка от имени девушек с иностранными мужчинами. Личные встречи не требуются, оплата за каждое сообщение.\n📌 Тематика: Флирт и знакомства.
📌 Цель: Подарки и организация приезда мужчины без участия кандидата.
📌 Требования: Ноутбук, быстрый интернет.
📌 График работы: 14:00–22:00, 22:00–06:00, 6/1 (Kyiv time)
💵 Стажировка: 1-7 дней.
💵 Выплаты: После первой недели и 20 числа.
💵 Ставка: 40%.
Выберите график.`,
                `Описание вакансии:\n📌 Основная работа: Ведение переписки с иностранными мужчинами от лица девушек, личные встречи не требуются. Оплата за каждое сообщение.\n📌 Тематика: Флирт и знакомства.\n📌 Цель: Подарки, контроль приезда мужчины и встреч без участия кандидата.\n📌 Требования: Ноутбук и стабильный интернет.\n📌 График: 14:00–22:00, 22:00–06:00, 6 дней, 1 выходной (Kyiv time)\n💵 Стажировка: 1-7 дней.\n💵 Выплаты: После первой недели и 20 числа.\n💵 Ставка: 40%.\nКакой график вам подходит?`
            ], 
            flirtClosings: [
                "Пожалуйста, составьте 10 фраз для флирта на основе приведённого примера.",
                "Составьте 10 флирт-фраз согласно предоставленному образцу.",
                "Напишите 10 сообщений для флирта, следуя примеру.",
                "Создайте 10 флирт-фраз по образцу.",
                "Сгенерируйте 10 фраз для флирта на основе примера.",
                "Составьте 10 предложений для флирта согласно образцу.",
                "Подготовьте 10 флирт-фраз, используя пример как руководство.",
                "Пожалуйста, подготовьте 10 фраз для флирта, следуя примеру.",
                "Составьте 10 сообщений для флирта по предоставленному образцу.",
                "Сгенерируйте 10 флирт-фраз согласно предоставленному примеру.",
                "Создайте 10 предложений для флирта по образцу.",
                "Пожалуйста, напишите 10 сообщений для флирта, используя пример.",
                "Составьте 10 фраз для флирта, следуя модели примера.",
                "Пожалуйста, создайте 10 флирт-фраз, следуя примеру.",
                "Напишите 10 флирт-предложений на основе предоставленного образца."
            ], 
            contacts: [
                "Благодарим за выполненное тестовое задание! Теперь вас будет сопровождать наш менеджер по обучению. Вот его контакты для связи.",
                "Отличная работа над тестовым заданием! Далее я передаю вас менеджеру, который отвечает за обучение. Вот его координаты.",
                "Спасибо за выполнение теста. На следующем шаге с вами свяжется менеджер по обучению. Вот его контакты.",
                "Тестовое задание успешно завершено. Теперь с вами будет работать наш менеджер, занимающийся обучением. Вот его данные.",
                "Благодарим вас за качественно выполненное тестовое задание. Дальнейшее взаимодействие будет проходить через менеджера по обучению. Вот его контакты.",
                "Задание выполнено, спасибо! Теперь я передаю вас нашему менеджеру, который курирует обучение. Вот его данные.",
                "Спасибо за тестовую работу. Следующий шаг — связь с менеджером, ответственным за обучение. Контакты ниже.",
                "Благодарим вас за выполнение задания. Дальнейшую работу с вами будет вести менеджер по обучению. Вот его контакты.",
                "Отлично, тест завершён. Теперь вас встретит наш менеджер по обучению. Вот его данные для связи.",
                "Задание принято, спасибо! Далее с вами будет работать менеджер, который отвечает за обучение. Вот его контакты.",
                "Благодарим за проделанную работу. Теперь я передаю вас нашему менеджеру по обучению. Свяжитесь с ним по этим контактам.",
                "Тестовое задание выполнено успешно. Следующим шагом станет взаимодействие с менеджером по обучению. Вот его контакты.",
                "Спасибо, вы завершили тест! Теперь передаю вас менеджеру, который займётся вашим обучением. Вот его координаты.",
                "Благодарим вас за выполненное задание. Дальше с вами будет общаться менеджер, курирующий обучение. Его контакты — ниже.",
                "Отличный результат! Теперь я передаю вас менеджеру по обучению. Связаться с ним можно по следующим контактам."
            ]
        },
        uk: { // Украинские шаблоны-заглушки для I18N
            greetings: [ "Доброго дня! Ми ChaterLab...", "Привіт! Це ChaterLab..." ], 
            jobDescriptions: [ `Опис вакансії:...\nЯкий графік вам підходить?` ], 
            jobDescriptionsPrime: [ `Опис вакансії (Прайм):...\nЯкий графік вам підходить?` ],
            flirtClosings: [ "Будь ласка, складіть 10 унікальних фраз...", "Як тест, напишіть 10 креативних ліній..." ], 
            contacts: [ "Дякуємо за виконане тестове...", "Чудова робота! Наступний крок — зв'язатися..." ] 
        }
    } 
};
