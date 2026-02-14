
export interface GalleryItem {
    id: number;
    category: string;
    image?: string;
    video?: string;
    title: string;
    description: string;
    isVideo?: boolean;
}

export const galleryItems: GalleryItem[] = [
    // Corporate Section - All available images and videos
    {
        id: 1,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_2.jpg',
        title: 'Corporate Meetings',
        description: 'Professional corporate meeting setups and arrangements'
    },
    {
        id: 2,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg',
        title: 'Business Conferences',
        description: 'Complete business conference planning and management'
    },
    {
        id: 3,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_4.jpg',
        title: 'Corporate Venues',
        description: 'Professional venue setup for corporate events'
    },
    {
        id: 4,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_5.jpg',
        title: 'Corporate Functions',
        description: 'Large-scale corporate functions and events'
    },
    {
        id: 5,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_6.jpg',
        title: 'Corporate Sponsor Boards',
        description: 'Professional sponsor board designs for corporate events'
    },
    {
        id: 6,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_7.jpg',
        title: 'Corporate Training Session',
        description: 'Professional training session setup with modern equipment'
    },
    {
        id: 7,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_8.jpg',
        title: 'Corporate Meeting Setup',
        description: 'Professional corporate meeting setup with modern equipment'
    },
    {
        id: 8,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_9.jpg',
        title: 'Corporate Lighting Setup',
        description: 'Premium lighting arrangements for corporate events'
    },
    {
        id: 9,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_10.jpg',
        title: 'Corporate Event Design',
        description: 'Creative event design and decoration services'
    },
    {
        id: 10,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_11.jpg',
        title: 'Corporate Celebration',
        description: 'Corporate celebration and award ceremony setup'
    },
    {
        id: 11,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration.jpg',
        title: 'Capture & Connect Decoration',
        description: 'Professional decoration for networking events'
    },
    {
        id: 12,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration_1.jpg',
        title: 'Networking Event Setup',
        description: 'Complete networking event arrangement'
    },
    {
        id: 13,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration_2.jpg',
        title: 'Corporate Networking',
        description: 'Professional networking event decoration'
    },
    {
        id: 14,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_45.jpg',
        title: 'Corporate Banner Design',
        description: 'Custom corporate banner and branding'
    },
    {
        id: 15,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_66.jpg',
        title: 'Corporate Branding',
        description: 'Professional corporate branding solutions'
    },
    {
        id: 16,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_88.jpg',
        title: 'Event Branding',
        description: 'Complete event branding and decoration'
    },
    {
        id: 17,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner.jpeg',
        title: 'Corporate Promotion',
        description: 'Corporate promotional event setup'
    },
    {
        id: 18,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner2.jpeg',
        title: 'Brand Promotion',
        description: 'Professional brand promotion setup'
    },
    {
        id: 19,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner3.jpeg',
        title: 'Marketing Event',
        description: 'Corporate marketing event arrangement'
    },
    {
        id: 20,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_44.jpg',
        title: 'Corporate Display',
        description: 'Professional corporate display setup'
    },
    {
        id: 21,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_event_44.jpg',
        title: 'Corporate Event Management',
        description: 'Complete corporate event management services'
    },
    {
        id: 22,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_event_65.jpg',
        title: 'Business Event Setup',
        description: 'Professional business event arrangement'
    },
    {
        id: 23,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_events_stall.jpg',
        title: 'Corporate Event Stall',
        description: 'Corporate exhibition stall design and setup'
    },
    // Corporate Videos
    {
        id: 24,
        category: 'corporate',
        video: '/rk-photos/Gallery/Corporate_Meetings/VID/Corporatemeeting1.mp4',
        title: 'Corporate Meeting Video',
        description: 'Professional corporate meeting coverage',
        isVideo: true,
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_2.jpg' // Thumbnail
    },
    {
        id: 25,
        category: 'corporate',
        video: '/rk-photos/Gallery/Corporate_Meetings/VID/Corporatemeetingvideo.mp4',
        title: 'Corporate Event Video',
        description: 'Complete corporate event video coverage',
        isVideo: true,
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg' // Thumbnail
    },
    {
        id: 26,
        category: 'corporate',
        video: '/rk-photos/Gallery/Corporate_Meetings/VID/corporate event video.mp4',
        title: 'Corporate Celebration Video',
        description: 'Corporate celebration and ceremony video',
        isVideo: true,
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_6.jpg' // Thumbnail
    },


    // Wedding Section - Multiple images
    {
        id: 6,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding Cart.jpeg',
        title: 'Weddings',
        description: 'Beautiful traditional wedding cart arrangements'
    },
    {
        id: 7,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding Cart1.jpeg',
        title: 'Wedding Cart Setup',
        description: 'Traditional wedding cart setup and decorations'
    },
    {
        id: 8,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding Cart2.jpeg',
        title: 'Wedding Cart Design',
        description: 'Elegant wedding cart design and arrangements'
    },
    {
        id: 9,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding Horse.jpeg',
        title: 'Wedding Horse Decorations',
        description: 'Traditional wedding horse decorations and setup'
    },
    {
        id: 10,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding.jpeg',
        title: 'Wedding Celebrations',
        description: 'Complete wedding celebration services'
    },
    {
        id: 11,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/wedding1.jpeg',
        title: 'Wedding Ceremonies',
        description: 'Beautiful wedding ceremony setups'
    },
    {
        id: 12,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding2.jpeg',
        title: 'Wedding Receptions',
        description: 'Elegant wedding reception celebrations'
    },
    {
        id: 13,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Weddingbride.jpeg',
        title: 'Bridal Setup',
        description: 'Special bridal decoration and setup'
    },
    {
        id: 14,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/Weddingcart3.jpeg',
        title: 'Wedding Cart Arrangements',
        description: 'Professional wedding cart arrangements'
    },
    {
        id: 15,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingDance.jpeg',
        title: 'Wedding Dance Performances',
        description: 'Traditional wedding dance performances'
    },
    {
        id: 16,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingDance2.jpeg',
        title: 'Wedding Dance Entertainment',
        description: 'Professional wedding dance entertainment'
    },
    {
        id: 17,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingDance3.jpeg',
        title: 'Wedding Dance Shows',
        description: 'Beautiful wedding dance performances'
    },

    {
        id: 18,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingTraditional music 2.jpeg',
        title: 'Traditional Wedding Music',
        description: 'Traditional wedding music and entertainment'
    },
    {
        id: 19,
        category: 'wedding',
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingTraditional music.jpeg',
        title: 'Wedding Traditional Music',
        description: 'Beautiful traditional wedding music performances'
    },

    // Birthday Section - Multiple images
    {
        id: 20,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_main.jpg',
        title: 'Birthday Celebrations',
        description: 'Fun and memorable birthday party celebrations'
    },


    // Birthday Decoration Photos
    {
        id: 22,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_main.jpg',
        title: 'Magical Princess Theme',
        description: 'Enchanting princess-themed birthday celebration with pink and purple decorations'
    },
    {
        id: 23,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_1.jpg', // Replaced StageDecoration1 with verified birthday asset
        title: 'Balloon Arch Paradise',
        description: 'Stunning balloon arch entrance with vibrant colors and festive atmosphere'
    },
    {
        id: 24,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_2.jpg',
        title: 'Garden Party Setup',
        description: 'Beautiful outdoor garden birthday party with natural decorations'
    },
    {
        id: 25,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_3.jpg',
        title: 'Superhero Adventure',
        description: 'Action-packed superhero themed birthday party decorations'
    },
    {
        id: 26,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_4.jpg',
        title: 'Unicorn Wonderland',
        description: 'Magical unicorn-themed party with pastel colors and sparkles'
    },
    {
        id: 27,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_5.jpg',
        title: 'Carnival Celebration',
        description: 'Fun carnival-themed birthday party with bright colors and games'
    },
    {
        id: 28,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_6.jpg',
        title: 'Frozen Winter Theme',
        description: 'Magical Frozen-inspired birthday party with blue and white decorations'
    },
    {
        id: 29,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_7.jpg',
        title: 'Safari Adventure',
        description: 'Wild safari-themed birthday party with jungle decorations and animals'
    },
    {
        id: 30,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_8.jpg',
        title: 'Space Explorer',
        description: 'Out-of-this-world space-themed birthday party with stars and planets'
    },
    {
        id: 31,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_9.jpg',
        title: 'Mermaid Under the Sea',
        description: 'Underwater mermaid-themed party with ocean blues and sea creatures'
    },
    {
        id: 32,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_10.jpg',
        title: 'Pirate Treasure Hunt',
        description: 'Adventurous pirate-themed birthday party with treasure maps and gold'
    },
    {
        id: 33,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_11.jpg',
        title: 'Butterfly Garden',
        description: 'Delicate butterfly-themed party with flowers and pastel decorations'
    },
    {
        id: 34,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_12.jpg',
        title: 'Racing Car Circuit',
        description: 'High-speed racing car themed birthday party with checkered flags'
    },
    {
        id: 35,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_cosplay.jpg',
        title: 'Fairy Tale Castle',
        description: 'Magical fairy tale themed party with castle decorations and crowns'
    },
    {
        id: 36,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_art.jpg',
        title: 'Art & Craft Studio',
        description: 'Creative art-themed birthday party with painting and craft activities'
    },
    {
        id: 37,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_art_1.jpg',
        title: 'Rainbow Paint Party',
        description: 'Colorful rainbow-themed art party with painting stations and creativity'
    },
    {
        id: 38,
        category: 'birthday',
        image: '/rk-photos/Gallery/Birthday/IMG/birthday_decoration_kidsplay.jpg',
        title: 'Adventure Playground',
        description: 'Fun-filled kids playground setup with games and entertainment zones'
    },

    // Mini Games Section - Multiple images
    {
        id: 39,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Mini games1.jpeg',
        title: 'Mini Games',
        description: 'Exciting mini games and activities for all ages'
    },
    {
        id: 40,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Mini games2.jpeg',
        title: 'Interactive Games',
        description: 'Interactive gaming activities for parties and events'
    },
    {
        id: 41,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame8.jpeg',
        title: 'Game Station Setup',
        description: 'Professional game station setup for entertainment'
    },
    {
        id: 42,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames3.jpeg',
        title: 'Group Gaming Activities',
        description: 'Fun group gaming activities for team building'
    },
    {
        id: 43,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames4.jpeg',
        title: 'Party Game Zone',
        description: 'Dedicated party game zones with various activities'
    },
    {
        id: 44,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames5.jpeg',
        title: 'Entertainment Setup',
        description: 'Complete entertainment setup with mini games'
    },
    {
        id: 45,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames6.jpeg',
        title: 'Kids Game Corner',
        description: 'Special kids game corner with age-appropriate activities'
    },
    {
        id: 46,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames7.jpeg',
        title: 'Active Gaming',
        description: 'Active gaming sessions for physical and mental engagement'
    },
    {
        id: 47,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames8.jpeg',
        title: 'Game Competition',
        description: 'Competitive gaming activities and tournaments'
    },
    {
        id: 48,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames9.jpeg',
        title: 'Fun Activities',
        description: 'Various fun activities and mini games for entertainment'
    },
    {
        id: 49,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames10.jpeg',
        title: 'Game Challenges',
        description: 'Challenging mini games for skill development'
    },
    {
        id: 50,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames11.jpeg',
        title: 'Team Games',
        description: 'Team-based mini games for group participation'
    },
    {
        id: 51,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame12.jpeg',
        title: 'Creative Games',
        description: 'Creative and educational mini games'
    },
    {
        id: 52,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame13.jpeg',
        title: 'Adventure Games',
        description: 'Adventure-themed mini games and activities'
    },
    {
        id: 53,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame14.jpeg',
        title: 'Skill Games',
        description: 'Skill-based mini games for all skill levels'
    },
    {
        id: 54,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames15.jpeg',
        title: 'Party Entertainment',
        description: 'Complete party entertainment with mini games'
    },
    {
        id: 55,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames16.jpeg',
        title: 'Game Festival',
        description: 'Mini game festival setup for large events'
    },
    {
        id: 56,
        category: 'sports',
        image: '/rk-photos/Gallery/Mini_Games/IMG/mini games.jpeg',
        title: 'Mini Games Collection',
        description: 'Complete collection of mini games and activities'
    },
    {
        id: 86,
        category: 'sports',
        video: '/rk-photos/Gallery/Mini_Games/VID/minigames_111.mp4',
        title: 'Interactive Game Video 1',
        description: 'Engaging interactive game for events',
        isVideo: true,
        image: '/rk-photos/Gallery/Mini_Games/IMG/Mini games1.jpeg'
    },
    {
        id: 87,
        category: 'sports',
        video: '/rk-photos/Gallery/Mini_Games/VID/minigames_123.mp4',
        title: 'Interactive Game Video 2',
        description: 'Fun interactive game activity',
        isVideo: true,
        image: '/rk-photos/Gallery/Mini_Games/IMG/Mini games2.jpeg'
    },
    {
        id: 88,
        category: 'sports',
        video: '/rk-photos/Gallery/Mini_Games/VID/minigamesvideo4.mp4',
        title: 'Interactive Game Video 3',
        description: 'Exciting interactive game moment',
        isVideo: true,
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames3.jpeg'
    },

    // Cultural Section - Multiple images
    {
        id: 57,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/Anniversary.jpg',
        title: 'Culturals',
        description: 'School annual day celebration 1'
    },
    {
        id: 58,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnual Day.jpeg',
        title: 'Annual Day 2',
        description: 'School annual day celebration 2'
    },
    {
        id: 59,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnualday1.jpeg',
        title: 'Annual Day 3',
        description: 'School annual day celebration 3'
    },
    {
        id: 60,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/Schoolannualday5.jpeg',
        title: 'Annual Day 4',
        description: 'School annual day celebration 4'
    },
    {
        id: 61,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday4.jpeg',
        title: 'Annual Day 5',
        description: 'School annual day celebration 5'
    },

    {
        id: 63,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday2.jpeg',
        title: 'Annual Day 7',
        description: 'School annual day celebration 7'
    },
    {
        id: 64,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday.jpeg',
        title: 'Annual Day 8',
        description: 'School annual day celebration 8'
    },
    {
        id: 65,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/School.jpeg',
        title: 'School Event',
        description: 'School event photo'
    },
    {
        id: 70,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/school1.jpeg',
        title: 'School Celebration',
        description: 'School cultural celebration'
    },
    {
        id: 71,
        category: 'cultural',
        video: '/rk-photos/Gallery/Culturals/VID/schoolstage.mp4',
        title: 'School Stage Performance',
        description: 'Cultural performance on school stage',
        isVideo: true,
        image: '/rk-photos/Gallery/Culturals/IMG/school1.jpeg' // Thumbnail for the video
    },
    {
        id: 72,
        category: 'cultural',
        video: '/rk-photos/Gallery/Culturals/VID/schoolstage1.mp4',
        title: 'School Cultural Event',
        description: 'Cultural event at school',
        isVideo: true,
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday.jpeg' // Thumbnail for the video
    },
    {
        id: 73,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/School Anual day 6.jpeg',
        title: 'Annual Day 9',
        description: 'School annual day celebration 9'
    },




    // Decorations Section - Stage Decoration images
    {
        id: 67,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/StageDecoration.jpeg',
        title: 'Stage decoration',
        description: 'Beautiful stage decoration 1'
    },
    {
        id: 68,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Stage.jpeg',
        title: 'Stage Decoration 2',
        description: 'Beautiful stage decoration 2'
    },
    {
        id: 69,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Stage Decoration.jpeg',
        title: 'Stage Decoration 3',
        description: 'Beautiful stage decoration 3'
    },
    {
        id: 74,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg',
        title: 'Corporate Board Meeting',
        description: 'Executive board meeting setup with professional seating and presentation facilities'
    },
    {
        id: 75,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Decorations123.jpg',
        title: 'Stage Decoration 4',
        description: 'Beautiful stage decoration 4'
    },
    {
        id: 76,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Decorations456.jpg',
        title: 'Stage Decoration 5',
        description: 'Beautiful stage decoration 5'
    },
    {
        id: 77,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_4.jpg',
        title: 'Corporate Conference Setup',
        description: 'Professional conference setup with modern equipment and elegant seating'
    },
    {
        id: 78,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/StageDecoration124.jpg',
        title: 'Stage Decoration 6',
        description: 'Beautiful stage decoration with elegant floral arrangements'
    },
    {
        id: 79,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_2.jpg',
        title: 'Corporate Training Session',
        description: 'Professional training session setup with modern presentation tools'
    },
    {
        id: 80,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Decoration50.jpg',
        title: 'Stage Decoration 7',
        description: 'Beautiful stage decoration with elegant floral and lighting arrangements'
    },
    {
        id: 81,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg',
        title: 'Corporate Meeting Setup',
        description: 'Professional corporate meeting setup with modern equipment and elegant seating'
    },
    {
        id: 82,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/Stagedecoration125.jpg',
        title: 'Stage Decoration 8',
        description: 'Elegant stage decoration with premium floral and lighting arrangements'
    },
    {
        id: 83,
        category: 'decorations',
        image: '/rk-photos/Gallery/Stage_Decoration/IMG/lights.jpg',
        title: 'Stage Decoration 9',
        description: 'Luxurious stage decoration with royal floral and ambient lighting'
    },
    {
        id: 84,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_6.jpg',
        title: 'Corporate Lighting Setup 1',
        description: 'Premium lighting arrangements for corporate events and conferences'
    },
    {
        id: 85,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/meeting_7.jpg',
        title: 'Corporate Lighting Setup 2',
        description: 'Sophisticated ambient lighting for professional corporate gatherings'
    }
];
