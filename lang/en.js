let settings = window.localStorage.getItem('settings');
    settings = JSON.parse(settings);

export default {
    title_event: 'Whats Happening?',
    opening_hours: 'Opening Hours',
    careers: 'Careers',
    phone: settings?.phone,
    address: settings?.address,
    contact: 'Contact Us',
    blog: 'Blog',
    about: 'About Us',
    advertising: 'Advertising',
    leasing: 'Leasing',
    mall_map: 'Mall Map',
    contact_tagline: 'We’re Here To Help, at Mall of Arabia we’re always ready to listen, feel free to get in touch anytime',
    contact_us: 'Contact Us',
    message: 'Message',
    subject: 'Subject',
    brand_name: 'Brand Name',
    email: 'Email Address',
    mobile_number: 'Mobile Number',
    full_name: 'Full Name',
    send: 'Send',
    shop: 'Shop',
    fashion: 'Fashion',
    dine: 'Dine',
    other: 'Others',
    copyright: `© Copyright Marakez ${new Date().getFullYear()}. All Rights Reserved.`,
    privacy: 'Privacy Policy',
    entity_group: 'View All Group Entities',
    entertain: 'Entertain',
    cinema: 'Cinema',
    events: 'Events',
    train: 'Train',
    available: 'Available',
    previous: 'Previous',
    advertisingText: 'Mall of Tanta offers your business unlimited media options to advertise and promote your brand',
    leasingText: 'Connect to submit your leasing interest in our shopping malls.',
    links: {
        shop: 'Shop',
        dine: 'Dine',
        entertain: 'Entertain',
        cinema: 'Cinema',
        train: 'Train',
        events: 'Events',
        services: 'Services',
        offers: 'Offers',
        blog: 'Blog'
    }
}