import {
    Building2,
    Heart,
    PartyPopper,
    Trophy,
    Palette,
    Camera,
    Sparkles,
    Headphones,
    Lightbulb,
    Zap,
    Monitor,
    Tv,
    Gamepad2,
    Settings,
    Brush
} from 'lucide-react';

export const eventTypes = [
    {
        icon: Building2,
        name: 'Corporate Events',
        description: 'Professional conferences, seminars, product launches, and team building activities',
        features: ['Conference Management', 'Product Launches', 'Corporate Parties', 'Team Building', 'Award Ceremonies', 'Business Meetings'],
        mediaId: 'service-corporate',
        image: '/img/conference.jpg'
    },
    {
        icon: Heart,
        name: 'Wedding Events',
        description: 'Complete wedding planning and management from engagement to reception',
        features: ['Wedding Planning', 'Bridal Services', 'Reception Management', 'Decoration & Themes', 'Photography & Videography', 'Catering Services'],
        mediaId: 'service-wedding',
        image: '/img/Wedding.jpeg'
    },
    {
        icon: PartyPopper,
        name: 'Birthday Parties',
        description: 'Memorable birthday celebrations for all ages with custom themes and entertainment',
        features: ['Theme Decoration', 'Entertainment Shows', 'Cake & Catering', 'Photography', 'Games & Activities', 'Return Gifts'],
        mediaId: 'service-birthday',
        image: '/img/birthday.jpg'
    },
    {
        icon: Trophy,
        name: 'Mini Games',
        description: 'Fun and engaging mini games for all ages and events',
        features: ['Game Organization', 'Equipment Setup', 'Prize Distribution', 'Game Coordination', 'Entertainment Activities', 'Interactive Fun'],
        mediaId: 'service-sports',
        image: '/img/games.jpg'
    },
    {
        icon: Palette,
        name: 'Cultural Events',
        description: 'Traditional and cultural celebrations with authentic themes and performances',
        features: ['Cultural Performances', 'Traditional Decorations', 'Folk Music & Dance', 'Cultural Shows', 'Festival Celebrations', 'Heritage Events'],
        mediaId: 'service-cultural',
        image: '/img/cultural-event.jpg'
    },
    {
        icon: Camera,
        name: 'Photography and Video',
        description: 'Professional photography and videography services for all your special moments',
        features: ['Event Photography', 'Video Coverage', 'Live Streaming', 'Drone Photography', 'Photo Booth Services', 'Video Editing'],
        mediaId: 'service-photography',
        image: '/img/wedding2.jpg'
    },
    {
        icon: Sparkles,
        name: 'Decorations',
        description: 'Creative and stunning decorations to transform your venue into a magical space',
        features: ['Theme Decorations', 'Floral Arrangements', 'Balloon Decorations', 'Stage Setup', 'Lighting Design', 'Venue Transformation'],
        mediaId: 'service-decorations',
        image: '/img/decoration1.jpg'
    }
];

export const eventServices = [
    // Audio & DJ Services
    {
        icon: Headphones,
        name: 'Professional Sounds',
        description: 'High-quality sound systems for crystal clear audio',
        features: ['Professional Sound Systems', 'Wireless Microphones', 'Audio Mixing', 'Sound Engineering', 'Acoustic Setup'],
        image: '/img/Professional_Sounds_Lights.jpeg'
    },

    // Lighting Solutions
    {
        icon: Lightbulb,
        name: 'Professional LED Lights',
        description: 'Advanced LED lighting solutions for stunning visual effects',
        features: ['LED Stage Lights', 'Color Changing Effects', 'Programmable Lighting', 'Ambient Lighting', 'Energy Efficient'],
        image: '/img/loghts.jpg'
    },
    {
        icon: Zap,
        name: 'Truss & Sharpy Lights',
        description: 'Professional truss systems and sharpy beam lights',
        features: ['Aluminum Truss Systems', 'Sharpy Beam Lights', 'Moving Head Lights', 'Laser Effects', 'Fog Machines'],
        image: '/img/stags.jpg'
    },
    {
        icon: Sparkles,
        name: 'Building Lights',
        description: 'Architectural and building illumination services',
        features: ['Building Facade Lighting', 'Architectural Illumination', 'Outdoor Event Lighting', 'Landscape Lighting', 'Safety Lighting'],
        image: '/img/decoration1.jpg'
    },

    // Visual Equipment
    {
        icon: Monitor,
        name: 'LED Wall & Standees',
        description: 'High-resolution LED walls and digital standees',
        features: ['HD LED Video Walls', 'Digital Standees', 'Content Management', 'Live Streaming Display', 'Interactive Displays'],
        image: '/img/LED Wall & Standees.jpg'
    },
    {
        icon: Tv,
        name: 'TV Rentals',
        description: 'Television and display screen rental services',
        features: ['Smart TV Rentals', 'Large Screen Displays', 'Projection Systems', 'Digital Signage', 'Installation Support'],
        image: '/img/tvrental.jpg'
    },

    // Entertainment & Activities
    {
        icon: Gamepad2,
        name: 'Interactive Games',
        description: 'Fun and engaging interactive games for all ages',
        features: ['Stall Games', 'Interactive Gaming', 'Bull Rides', 'Virtual Reality Games', 'Prize Distribution'],
        image: '/img/interactive.jpg'
    },

    {
        icon: Settings,
        name: 'Octanum Stalls',
        description: 'Specialized octagonal gaming and activity stalls',
        features: ['Octagonal Game Stalls', 'Multi-activity Zones', 'Carnival Games', 'Prize Counters', 'Custom Branding'],
        image: '/img/stall.jpg'
    },

    // Art & Creative Services
    {
        icon: Brush,
        name: 'Tattoo Painting & Mehandi Arts',
        description: 'Professional body art and traditional mehandi services',
        features: ['Temporary Tattoo Art', 'Traditional Mehandi', 'Body Painting', 'Henna Designs', 'Bridal Mehandi'],
        image: '/img/mehandi12.jpg'
    },

    // Event Setup & Design
    {
        icon: Palette,
        name: 'Stage Works & Backdrops',
        description: 'Professional stage construction and backdrop design',
        features: ['Stage Construction', 'Custom Backdrops', 'Miniature Works', 'Theme Decoration', 'Props & Sets'],
        image: '/img/stags.jpg'
    },

    // Photography & Videography
    {
        icon: Camera,
        name: 'Photography & Videography',
        description: 'Professional photo and video coverage services',
        features: ['Photo Gallery Setup', 'Video Coverage', 'Live Streaming', 'Drone Photography', 'Photo Booth Services'],
        image: '/img/wedding2.jpg'
    }
];

export const serviceGalleryImages: Record<string, Array<{ id: number; url: string; title: string; description: string }>> = {
    'Professional Sounds': [
        { id: 1, url: '/img/Professional_Sounds_Lights.jpeg', title: 'Sound Systems', description: 'Professional audio equipment and sound systems' },
        { id: 2, url: '/img/stags.jpg', title: 'Stage Audio', description: 'Stage-specific audio setup and equipment' },
        { id: 3, url: '/img/decoration1.jpg', title: 'Venue Audio', description: 'Complete venue audio system installation' },
        { id: 4, url: '/img/conference.jpg', title: 'Conference Audio', description: 'Professional audio for conferences and meetings' },
        { id: 5, url: '/img/Wedding.jpeg', title: 'Wedding Audio', description: 'Crystal clear audio for wedding ceremonies' },
        { id: 6, url: '/img/cultural-event.jpg', title: 'Event Audio', description: 'High-quality sound for large events' }
    ],
    'Professional LED Lights': [
        { id: 1, url: '/img/loghts.jpg', title: 'LED Lighting', description: 'Professional LED lighting systems' },
        { id: 2, url: '/img/stags.jpg', title: 'Stage Lighting', description: 'Advanced stage lighting setup' },
        { id: 3, url: '/img/decoration1.jpg', title: 'Venue Lighting', description: 'Complete venue lighting solutions' },
        { id: 4, url: '/img/wedding2.jpg', title: 'Wedding Lighting', description: 'Romantic LED lighting for weddings' },
        { id: 5, url: '/img/birthday.jpg', title: 'Party Lighting', description: 'Colorful LED lights for birthday parties' },
        { id: 6, url: '/img/cultural-event.jpg', title: 'Festive Lighting', description: 'Festive LED decorations and lighting' }
    ],
    'Truss & Sharpy Lights': [
        { id: 1, url: '/img/stags.jpg', title: 'Truss Systems', description: 'Professional aluminum truss systems' },
        { id: 2, url: '/img/loghts.jpg', title: 'Sharpy Lights', description: 'High-intensity sharpy beam lights' },
        { id: 3, url: '/img/LED Wall & Standees.jpg', title: 'Stage Truss', description: 'Complete stage truss and lighting setup' },
        { id: 4, url: '/img/decoration1.jpg', title: 'Venue Truss', description: 'Large venue truss installations' },
        { id: 5, url: '/img/Professional_Sounds_Lights.jpeg', title: 'Concert Lighting', description: 'Concert-grade truss and lighting systems' },
        { id: 6, url: '/img/audiovideo.jpg', title: 'Technical Setup', description: 'Professional technical and lighting setup' }
    ],
    'Building Lights': [
        { id: 1, url: '/img/decoration1.jpg', title: 'Building Illumination', description: 'Professional building facade lighting' },
        { id: 2, url: '/img/loghts.jpg', title: 'Architectural Lighting', description: 'Architectural lighting design and installation' },
        { id: 3, url: '/RK photos/Gallery/Stage_Decoration/IMG/Decoration50.jpg', title: 'Outdoor Lighting', description: 'Beautiful outdoor and landscape lighting' },
        { id: 4, url: '/img/wedding2.jpg', title: 'Wedding Venue Lighting', description: 'Elegant venue lighting for weddings' },
        { id: 5, url: '/img/cultural-event.jpg', title: 'Festive Building Lights', description: 'Festive building decorations and lighting' },
        { id: 6, url: '/img/LED Wall & Standees.jpg', title: 'Event Venue Lighting', description: 'Complete event venue lighting solutions' }
    ],
    'LED Wall & Standees': [
        { id: 1, url: '/img/LED Wall & Standees.jpg', title: 'LED Video Wall', description: 'High-resolution LED video wall displays' },
        { id: 2, url: '/img/tvrental.jpg', title: 'Digital Displays', description: 'Professional digital display solutions' },
        { id: 3, url: '/img/conference.jpg', title: 'Conference LED Wall', description: 'LED walls for corporate conferences' },
        { id: 4, url: '/img/wedding2.jpg', title: 'Wedding LED Backdrop', description: 'Beautiful LED backdrops for weddings' },
        { id: 5, url: '/img/cultural-event.jpg', title: 'Event LED Screens', description: 'Large LED screens for events and festivals' },
        { id: 6, url: '/img/audiovideo.jpg', title: 'AV Integration', description: 'LED wall integration with AV systems' }
    ],
    'TV Rentals': [
        { id: 1, url: '/img/tvrental.jpg', title: 'TV Rental Service', description: 'Professional TV and display rentals' },
        { id: 2, url: '/img/conference.jpg', title: 'Conference Displays', description: 'TV rentals for conferences and meetings' },
        { id: 3, url: '/img/decoration1.jpg', title: 'Venue Displays', description: 'Large venue TV and display installations' },
        { id: 4, url: '/img/LED Wall & Standees.jpg', title: 'Stage Displays', description: 'Stage-mounted TV and display systems' },
        { id: 5, url: '/img/audiovideo.jpg', title: 'AV Display Setup', description: 'Complete AV and display system setup' }
    ],
    'Interactive Games': [
        { id: 1, url: '/img/interactive.jpg', title: 'Interactive Gaming', description: 'Fun interactive games for all ages' },
        { id: 2, url: '/img/games.jpg', title: 'Game Activities', description: 'Various gaming activities and competitions' },
        { id: 3, url: '/img/stall.jpg', title: 'Game Stalls', description: 'Professional game stall setups' },
        { id: 4, url: '/RK photos/Gallery/Mini_Games/IMG/Minigames4.jpeg', title: 'Fun Activities', description: 'Entertaining games and fun activities' },
        { id: 5, url: '/RK photos/Gallery/Mini_Games/IMG/Minigames5.jpeg', title: 'Active Games', description: 'Physical and active gaming activities' }
    ],

    'Octanum Stalls': [
        { id: 1, url: '/img/stall.jpg', title: 'Octanum Stalls', description: 'Specialized octagonal gaming stalls' },
        { id: 2, url: '/RK photos/Gallery/Stage_Decoration/IMG/Decorations123.jpg', title: 'Multiple Stalls', description: 'Various octanum stall configurations' },
        { id: 3, url: '/img/decoration1.jpg', title: 'Decorated Stalls', description: 'Beautifully decorated octanum stalls' },
        { id: 4, url: '/img/games.jpg', title: 'Stall Games', description: 'Games and activities in octanum stalls' },
        { id: 5, url: '/img/interactive.jpg', title: 'Interactive Stalls', description: 'Interactive activities in octanum stalls' }
    ],
    'Tattoo Painting & Mehandi Arts': [
        { id: 1, url: '/img/mehandi12.jpg', title: 'Mehandi Art', description: 'Beautiful traditional mehandi designs' },
        { id: 2, url: '/RK photos/Gallery/Culturals/IMG/cultural-event.jpg', title: 'Traditional Art', description: 'Traditional body art and painting' },
        { id: 3, url: '/img/stall.jpg', title: 'Nail Art Stalls', description: 'Professional nail art and beauty stalls' },
        { id: 4, url: '/img/Wedding.jpeg', title: 'Bridal Mehandi', description: 'Special bridal mehandi and henna services' },
        { id: 5, url: '/img/cultural-event.jpg', title: 'Family Traditions', description: 'Traditional art for family celebrations' }
    ],
    'Stage Works & Backdrops': [
        { id: 1, url: '/img/stags.jpg', title: 'Stage Construction', description: 'Professional stage construction and setup' },
        { id: 2, url: '/img/LED Wall & Standees.jpg', title: 'Stage Design', description: 'Creative stage design and decoration' },
        { id: 3, url: '/img/decoration1.jpg', title: 'Backdrop Creation', description: 'Custom backdrop design and creation' },
        { id: 4, url: '/RK photos/Gallery/Stage_Decoration/IMG/Stage.jpeg', title: 'Decorative Backdrops', description: 'Beautiful floral and decorative backdrops' },
        { id: 5, url: '/img/Wedding.jpeg', title: 'Wedding Stage', description: 'Elegant wedding stage and backdrop setup' },
        { id: 6, url: '/img/conference.jpg', title: 'Corporate Stage', description: 'Professional corporate stage setup' }
    ],
    'Photography & Videography': [
        { id: 1, url: '/img/wedding2.jpg', title: 'Professional Photography', description: 'High-quality event photography services' },
        { id: 2, url: '/img/Wedding.jpeg', title: 'Wedding Photography', description: 'Beautiful wedding photography and videography' },
        { id: 3, url: '/img/wedding2.jpg', title: 'Event Coverage', description: 'Complete event photo and video coverage' },
        { id: 4, url: '/img/cultural-event.jpg', title: 'Portrait Photography', description: 'Professional portrait and group photography' }
    ]
};
