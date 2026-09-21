
export interface GalleryItem {
    id: number;
    category: string;
    image?: string;
    video?: string;
    title: string;
    description: string;
    isVideo?: boolean;
    images?: string[];
    videos?: string[];
    isGrouped?: boolean;
}

export const galleryItems: GalleryItem[] = [
    {
        id: 86,
        category: 'sports',
        title: 'Interactive Games Highlights',
        description: 'Watch our exciting interactive games in action! From high-tech challenges to classic fun.',
        video: '/rk-photos/Gallery/Mini_Games/VID/minigames_111.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Mini_Games/IMG/10.jpeg',
        isGrouped: false
    },
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
    {
        id: 261,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_mou_exchange_stage.jpg',
        title: 'MoU Exchange Stage Setup',
        description: 'Grand corporate stage and VIP seating setup for ICT Academy MoU Exchange'
    },
    {
        id: 262,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_mou_exchange_panel.jpg',
        title: 'Executive Panel Discussion',
        description: 'Dignitaries and keynote speakers on stage during corporate MoU exchange ceremony'
    },
    {
        id: 263,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_digital_standee.jpg',
        title: 'Digital LED Standee Display',
        description: 'Modern vertical LED kiosk display for corporate event branding and schedule'
    },
    {
        id: 264,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_photobooth_setup.jpg',
        title: "Bridge'26 Photo Booth & Sponsor Wall",
        description: 'Illuminated 3D brand logo table with custom sponsor media wall'
    },
    {
        id: 265,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_photobooth_team.jpg',
        title: 'Interactive Corporate Photo Booth',
        description: "Attendees engaging with interactive hashtag props at ICT Academy Bridge'26"
    },
    {
        id: 266,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_venue_ambiance.jpg',
        title: 'Conference Foyer & Ambiance',
        description: 'Grand venue entrance with luxury chandelier and branded event installation'
    },
    {
        id: 267,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_conference_hall.jpg',
        title: 'Annual Conference Hall',
        description: 'Full conference hall management with truss lighting, AV setup, and theater seating'
    },
    {
        id: 268,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_main_stage.jpg',
        title: 'Main Conference Stage & LED Wall',
        description: 'Ultra-wide LED stage backdrop, line-array audio, and sponsor branding displays'
    },
    {
        id: 269,
        category: 'corporate',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_building_illumination.jpg',
        title: 'Corporate Facade Illumination',
        description: 'Themed tricolor LED facade lighting and decorative illumination for corporate towers'
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
    {
        id: 270,
        category: 'corporate',
        video: '/rk-photos/Gallery/Corporate_Meetings/VID/corporate_bridge26_event_reel.mp4',
        title: "Bridge'26 Event Highlights Reel",
        description: "Highlight reel and event management showcase of ICT Academy Bridge'26 Puducherry",
        isVideo: true,
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_bridge26_photobooth_team.jpg' // Thumbnail
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

    // Interactive Games Section - Grouped by Game Type
    {
        id: 39,
        category: 'sports',
        title: 'Kids Bouncy Castle / Inflatable Slide',
        description: 'Safe and fun inflatable bouncy castles and slides for children.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/1.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/1.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/3.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/4.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames7.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 40,
        category: 'sports',
        title: 'Crazy Chicken Shooting Game',
        description: 'Test your aim with this fun and interactive chicken shooting game.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/10.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/10.jpeg'],
        videos: ['/rk-photos/Gallery/Mini_Games/VID/minigames_111.mp4'],
        isGrouped: true
    },
    {
        id: 41,
        category: 'sports',
        title: 'Giant Chess Game',
        description: 'A life-sized version of the classic strategy game for grand-scale fun.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames9.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Minigames9.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 42,
        category: 'sports',
        title: 'Whack-A-Frog Game',
        description: 'Fast-paced fun as you try to whack the frogs as they appear.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/12.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/12.jpeg'],
        videos: ['/rk-photos/Gallery/Mini_Games/VID/Minigamesvideo3.mp4'],
        isGrouped: true
    },
    {
        id: 43,
        category: 'sports',
        title: 'Grab The Stick Reaction Game',
        description: 'Test your reflexes by catching the sticks as they drop.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/13.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/13.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/11.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames6.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/minigames86.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames11.jpeg'
        ],
        videos: [
            '/rk-photos/Gallery/Mini_Games/VID/Minigamesvideo.mp4',
            '/rk-photos/Gallery/Mini_Games/VID/Minigamesvideo2.mp4',
            '/rk-photos/Gallery/Mini_Games/VID/minigame_video4.mp4'
        ],
        isGrouped: true
    },
    {
        id: 44,
        category: 'sports',
        title: 'Giant Tic Tac Toe',
        description: 'The classic game of strategy played on a giant scale.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/14.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/14.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames16.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 45,
        category: 'sports',
        title: 'Giant Snake and Ladder',
        description: 'Climb ladders and slide down snakes in this giant floor game.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/16.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/16.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 46,
        category: 'sports',
        title: 'Giant Twister Game',
        description: 'Get tangled up in fun with this larger-than-life Twister game.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/17.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/17.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames8.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 47,
        category: 'sports',
        title: 'Buzz Wire Challenge',
        description: 'Steady hands are a must to navigate the wire without making it buzz.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/22.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/22.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/minigame%2067.jpeg'
        ],
        videos: ['/rk-photos/Gallery/Mini_Games/VID/Minigamesvideo3.mp4'],
        isGrouped: true
    },
    {
        id: 48,
        category: 'sports',
        title: 'Archery Challenge',
        description: 'Channel your inner archer and aim for the bullseye.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/28.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/28.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 49,
        category: 'sports',
        title: 'Mini Golf Putting',
        description: 'Perfect your putting skills on our miniature golf course.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/30.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/30.jpeg'],
        videos: ['/rk-photos/Gallery/Mini_Games/VID/minigames_123.mp4'],
        isGrouped: true
    },
    {
        id: 50,
        category: 'sports',
        title: 'Can Knockdown Game',
        description: 'How many cans can you knock down in one throw?',
        image: '/rk-photos/Gallery/Mini_Games/IMG/27.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/27.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/mini%20games.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 51,
        category: 'sports',
        title: 'Cone Ring Toss Game',
        description: 'A fun variation of ring toss using colorful cones.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/29.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/29.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Mini%20games2.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigame14.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 52,
        category: 'sports',
        title: 'Zorb Roller Game',
        description: 'Roll and race in giant inflatable Zorb barrels.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/21.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/21.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 53,
        category: 'sports',
        title: 'Mascot Character Entertainment',
        description: 'Professional mascot characters to bring joy to any event.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/18.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/18.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/19.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/20.jpeg'
        ],
        videos: [],
        isGrouped: true
    },
    {
        id: 54,
        category: 'sports',
        title: 'Gyro Putter Game',
        description: 'Test your precision and balance with the dynamic Gyro Putter challenge.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame12.jpeg',
        images: [
            '/rk-photos/Gallery/Mini_Games/IMG/Minigame12.jpeg',
            '/rk-photos/Gallery/Mini_Games/IMG/Minigames5.jpeg'
        ],
        videos: ['/rk-photos/Gallery/Mini_Games/VID/minigames_123.mp4'],
        isGrouped: true
    },
    {
        id: 55,
        category: 'sports',
        title: 'Bicycle Game',
        description: 'Pedal your way to victory in this exciting bicycle-themed interactive challenge.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Mini games1.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Mini games1.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 56,
        category: 'sports',
        title: 'Pottery Game',
        description: 'Explore your creativity with our traditional pottery making activity.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/minigame_pottery.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/minigame_pottery.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 57,
        category: 'sports',
        title: 'Square Game',
        description: 'A fun and engaging tile-based puzzle game.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames15.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Minigames15.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 58,
        category: 'sports',
        title: 'Giant Ludo Game',
        description: 'Enjoy the classic board game Ludo on a massive scale with life-sized pieces.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames10.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Minigames10.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 59,
        category: 'sports',
        title: 'Mechanical Bull Ride',
        description: 'Take on the challenge and see how long you can stay on our professional mechanical bull.',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigame13.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Minigame13.jpeg'],
        videos: [],
        isGrouped: true
    },
    {
        id: 60,
        category: 'sports',
        title: 'High Striker (Hammer Strength Game)',
        description: 'Test your strength with our classic high striker challenge. Hit the base with the hammer and see if you can ring the bell!',
        image: '/rk-photos/Gallery/Mini_Games/IMG/Minigames_56.jpeg',
        images: ['/rk-photos/Gallery/Mini_Games/IMG/Minigames_56.jpeg'],
        videos: [],
        isGrouped: true
    },

    // Cultural Section - Multiple images
    {
        id: 272,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/college_freshers_day_stage_svct.jpg',
        title: 'College Day & Culturals Stage',
        description: 'Grand college auditorium stage setup with LED backdrop, audio monitors, and floral decor at SVCT'
    },
    {
        id: 273,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/college_freshers_day_banner_svct.jpg',
        title: "Fresher's Day Celebration & Keynote",
        description: "Fresher's Day 2026 event management with prominent keynote speakers and dignitary stage at SVCT"
    },
    {
        id: 57,
        category: 'wedding',
        image: '/rk-photos/Gallery/Culturals/IMG/Anniversary.jpg',
        title: 'Wedding Anniversary stage decoration',
        description: 'Elegant stage setup for wedding anniversary celebration'
    },
    {
        id: 58,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnual Day.jpeg',
        title: 'College Culturals and School Annual Day Stage',
        description: 'Grand stage lighting and setup for College Culturals and School Annual Day celebration'
    },
    {
        id: 59,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnualday1.jpeg',
        title: 'Student Cultural Performance',
        description: 'Vibrant cultural dance performance by students on stage'
    },
    {
        id: 60,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/Schoolannualday5.jpeg',
        title: 'College Culturals and School Annual Day Celebrations',
        description: 'Students group performance during College Culturals and School Annual Day events'
    },
    {
        id: 61,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday4.jpeg',
        title: 'Culturals Dance Choreography',
        description: 'Traditional and fusion dance choreography performance'
    },

    {
        id: 63,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday2.jpeg',
        title: 'School Festive Drama',
        description: 'Students theatrical play and drama performance on stage'
    },
    {
        id: 64,
        category: 'cultural',
        image: '/rk-photos/Gallery/Culturals/IMG/SchoolAnnualday.jpeg',
        title: 'Stage Presentation Ceremony',
        description: 'Award presentation ceremony and stage event for College Culturals and School Annual Day'
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
    },
    // VR, Motion & 360° Photo Booth Section
    {
        id: 201,
        category: 'vr-motion-360',
        image: '/rk-photos/Gallery/VR_Games/vr.jpeg',
        title: 'Immersive VR Arena',
        description: 'Immersive virtual reality gaming experience with Meta Quest headsets.',
        images: [
            '/rk-photos/Gallery/VR_Games/vr.jpeg',
            '/rk-photos/Gallery/VR_Games/vr1.jpeg',
            '/rk-photos/Gallery/VR_Games/vr2.jpeg',
            '/rk-photos/Gallery/VR_Games/vr3.jpeg',
            '/rk-photos/Gallery/VR_Games/vr4.jpeg'
        ],
        isGrouped: true
    },
    {
        id: 202,
        category: 'vr-motion-360',
        image: '/rk-photos/Gallery/VR_Games/vr1.jpeg',
        title: 'Virtual Sports Simulator',
        description: 'Interactive VR sports simulator setup for corporate gala fests.'
    },
    {
        id: 211,
        category: 'vr-motion-360',
        image: '/img/interactive.jpg',
        title: 'Switch Motion Play',
        description: 'Active multiplayer dancing and sports motion gaming challenge.'
    },
    {
        id: 212,
        category: 'vr-motion-360',
        image: '/img/interactive.jpg',
        title: 'Interactive Xbox Dance',
        description: 'Xbox Kinect dance-off competition zone setup.'
    },
    {
        id: 221,
        category: 'vr-motion-360',
        image: '/img/wedding2.jpg',
        title: '360 Spin Platform',
        description: '360-degree slow motion video captures with customized graphic layouts.'
    },
    {
        id: 222,
        category: 'vr-motion-360',
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding2.jpeg',
        title: '360 Photo Booth Setup',
        description: 'Popular 360-degree capture setups for wedding events.'
    },
    // Stalls Section
    {
        id: 231,
        category: 'stalls',
        image: '/rk-photos/Gallery/Stalls/Octanum.jpeg',
        title: 'Octanum Stall Setup',
        description: 'Specialized octagonal activity stalls setup.',
        images: [
            '/rk-photos/Gallery/Stalls/Octanum.jpeg',
            '/rk-photos/Gallery/Stalls/Octanum1.jpeg',
            '/rk-photos/Gallery/Stalls/Octanum2.jpeg',
            '/rk-photos/Gallery/Stalls/Octanum3.jpeg'
        ],
        isGrouped: true
    },
    {
        id: 232,
        category: 'stalls',
        image: '/rk-photos/Gallery/Corporate_Meetings/IMG/corporate_events_stall.jpg',
        title: 'Corporate Activity Stalls',
        description: 'Custom activity and game stalls setup.'
    },
    // New Wedding Videos
    {
        id: 251,
        category: 'wedding',
        video: '/rk-photos/Gallery/Weddings/VID/wed.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding2.jpeg',
        title: 'Wedding Reception Highlights',
        description: 'Beautiful highlight reel of the wedding dance and reception festivities.'
    },
    {
        id: 252,
        category: 'wedding',
        video: '/rk-photos/Gallery/Weddings/VID/wed1.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Weddings/IMG/Wedding.jpeg',
        title: 'Traditional Wedding Rituals',
        description: 'Highlights of traditional wedding rituals and entry celebrations.'
    },
    {
        id: 253,
        category: 'wedding',
        video: '/rk-photos/Gallery/Weddings/VID/wed2.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Weddings/IMG/wedding1.jpeg',
        title: 'Wedding Sangeet Celebration',
        description: 'Energetic sangeet dance performances and stage highlights.'
    },
    {
        id: 254,
        category: 'wedding',
        video: '/rk-photos/Gallery/Weddings/VID/wed3.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Weddings/IMG/WeddingDance.jpeg',
        title: 'Groom & Bride Entry',
        description: 'The grand and spectacular entry of the groom and bride.'
    },
    {
        id: 271,
        category: 'wedding',
        video: '/rk-photos/Gallery/Weddings/VID/wedding_reception_entry.mp4',
        isVideo: true,
        image: '/rk-photos/Gallery/Weddings/IMG/wedding_reception_entry_thumb.jpg',
        title: 'Grand Wedding Reception Entry',
        description: 'Spectacular aisle entry of the bride and groom with floral garlands, cold pyro, and cloud effects.'
    }
];
