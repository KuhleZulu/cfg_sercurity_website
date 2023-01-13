import { TechnologyModel } from "src/models/technology.model";

export const TECHNOLOGIES: TechnologyModel[] = [
    {
        Id:1,
        Title: 'CFS MOBILE SECURITY',
        TitleSpan: 'APPLICATION SYSTEM',
        Type: 'p',
        content: [
            'In emergency situations, the ability to provide immediate notifications, Particulary in situations when every second counts, can be a lifesaver.',
            'CFS Mobile Security System compromises of the ASP Mobile Security Smartphone/Tablet application and the ASP Mobile Security Web Applicaiton'
        ],
    },
    {
        Id:1,
        Title: 'KEY FEATURES OF THE CFS',
        TitleSpan: 'MOBILE SECURITY SYSTEM',
        Type: 'bullet',
        content: [
            'Fast crisis communication and incident management.',
            'Simple and intuitive user interface design.',
            'Robust messaging system.',
            'Automatic failover to SMS or voice calls when internet connectivity is not available.',
            'Multi-device support.',
            'Full support for location services; shows exact real-time location of the system users.',
            'Logging of all events.',
            'System is made to be easily customized to client needs and typical scenarios.'
        ]
    }
];