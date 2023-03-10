let settings = window.localStorage.getItem('settings');
    settings = JSON.parse(settings);

export default {
    title_event: 'ما الجديد؟',
    opening_hours: 'مواعيد العمل',
    careers: 'وظائف',
    phone: 'رقم 16269',
    phone: `${settings?.phone} رقم`,
    address: settings?.address,
    contact: 'اتصل بنا',
    blog: 'مقالات',
    about: 'نبذة عنا',
    advertising: 'الاعلانات',
    leasing: 'الايجارات',
    mall_map: 'خريطة المول',
    contact_tagline: 'نحن هنا لمساعدتك في مول العرب ..',
    contact_us: 'تواصل معنا',
    message: 'التفاصيل',
    subject: 'العنوان',
    brand_name: 'اسم العلامة التجارية',
    email: 'البريد الالكتروني',
    mobile_number: 'رقم الهاتف',
    full_name: 'الاسم بالكامل',
    send: 'ارسل',
    shop: 'تسوق',
    fashion: 'الموضة',
    dine: 'المطاعم',
    other: 'العروض',
    copyright: `${new Date().getFullYear()} جميع الحقوق محفوظة لمراكز`,
    privacy: 'سياسة الخصوصية',
    entity_group: 'عرض كيانات المجموعة',
    entertain: 'الترفيه',
    cinema: 'السنيما',
    events: 'الفعاليات',
    train: 'تدريب',
    advertisingText: 'يقدم مول العرب عدد غير محدود من الميديا لدفععلاماتك التجارية',
    leasingText: 'تواصل معنا للحصول على افضل الفرص الايجارية',

    available: 'متوفرة',
    previous: 'السابق',

    latest_movies: '',

    links: {
        shop: 'تسوق',
        dine: 'المطاعم',
        entertain: 'الترفيه',
        cinema: 'السنيما',
        train: 'تدريب',
        events: 'الفعاليات',
        services: 'الخدمات',
        offers: 'العروض',
        blog: 'مقالات',
    }
}