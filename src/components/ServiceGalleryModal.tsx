import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Eye } from 'lucide-react';

interface ServiceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
  };
}

const ServiceGalleryModal = ({ isOpen, onClose, service }: ServiceGalleryModalProps) => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [selectedImage, setSelectedImage] = useState<number>(0);

  if (!isOpen) return null;

  // Service-specific images and videos
  const getServiceMedia = (category: string) => {
    // Base URL for assets - this will work in both dev and production
    const baseUrl = '/'; // Absolute path for sub-routes

    switch (category) {
      case 'services':
        return {
          images: [
            { id: 1, url: `${baseUrl}img/wedding-dj.jpg`, title: 'Professional DJ Setup', description: 'High-quality DJ equipment and sound systems' },
            { id: 2, url: `${baseUrl}img/audiovideo.jpg`, title: 'Audio Visual Equipment', description: 'Complete AV setup for events' },
            { id: 3, url: `${baseUrl}img/stage.jpg`, title: 'Stage Construction', description: 'Professional stage setup and design' },
            { id: 4, url: `${baseUrl}img/tvrental.jpg`, title: 'TV Rental Services', description: 'Large screen displays and rentals' },
            { id: 5, url: `${baseUrl}img/interactive.jpg`, title: 'Interactive Games', description: 'Fun gaming setups and activities' },
            { id: 6, url: `${baseUrl}img/360-service.jpg`, title: '360° Photography', description: 'Immersive photography services' },
            { id: 7, url: `${baseUrl}img/catering.jpg`, title: 'Catering Services', description: 'Professional food and beverage services' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Corporate%20service/Corporatemeetingvideo.mp4`, title: 'Corporate Meeting Setup', description: 'Professional corporate event setup process' },
            { id: 2, url: `${baseUrl}rk-photos/Mini%20Games/Minigamesvideo.mp4`, title: 'Mini Games Activities', description: 'Fun mini games and entertainment' }
          ]
        };
      case 'corporate':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_2.jpg`, title: 'Corporate Meetings', description: 'Professional corporate meeting setups and arrangements' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_3.jpg`, title: 'Business Conferences', description: 'Complete business conference planning and management' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_4.jpg`, title: 'Corporate Venues', description: 'Professional venue setup for corporate events' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_5.jpg`, title: 'Corporate Functions', description: 'Large-scale corporate functions and events' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_6.jpg`, title: 'Corporate Sponsor Boards', description: 'Professional sponsor board designs for corporate events' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_7.jpg`, title: 'Corporate Training Session', description: 'Professional training session setup with modern equipment' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_8.jpg`, title: 'Corporate Meeting Setup', description: 'Professional corporate meeting setup with modern equipment' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_9.jpg`, title: 'Corporate Lighting Setup', description: 'Premium lighting arrangements for corporate events' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_10.jpg`, title: 'Corporate Event Design', description: 'Creative event design and decoration services' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/meeting_11.jpg`, title: 'Corporate Celebration', description: 'Corporate celebration and award ceremony setup' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration.jpg`, title: 'Capture & Connect Decoration', description: 'Professional decoration for networking events' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration_1.jpg`, title: 'Networking Event Setup', description: 'Complete networking event arrangement' },
            { id: 13, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/capture_connect_decoration_2.jpg`, title: 'Corporate Networking', description: 'Professional networking event decoration' },
            { id: 14, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_45.jpg`, title: 'Corporate Banner Design', description: 'Custom corporate banner and branding' },
            { id: 15, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_66.jpg`, title: 'Corporate Branding', description: 'Professional corporate branding solutions' },
            { id: 16, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_88.jpg`, title: 'Event Branding', description: 'Complete event branding and decoration' },
            { id: 17, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_banner_44.jpg`, title: 'Corporate Display', description: 'Professional corporate display setup' },
            { id: 18, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_event_44.jpg`, title: 'Corporate Event Management', description: 'Complete corporate event management services' },
            { id: 19, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_event_65.jpg`, title: 'Business Event Setup', description: 'Professional business event arrangement' },
            { id: 20, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/corporate_events_stall.jpg`, title: 'Corporate Event Stall', description: 'Corporate exhibition stall design and setup' },
            { id: 21, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner.jpeg`, title: 'Corporate Promotion', description: 'Corporate promotional event setup' },
            { id: 22, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner2.jpeg`, title: 'Corporate Promotion 2', description: 'Corporate promotional event setup variant' },
            { id: 23, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/IMG/cooportate_banner3.jpeg`, title: 'Corporate Promotion 3', description: 'Corporate promotional event setup alternative' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/VID/Corporatemeeting1.mp4`, title: 'Corporate Meeting Video', description: 'Professional corporate meeting coverage' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/VID/Corporatemeetingvideo.mp4`, title: 'Corporate Event Video', description: 'Complete corporate event video coverage' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/VID/coorporate_banner_video.mp4`, title: 'Corporate Banner Video', description: 'Corporate banner showcase' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/VID/coorporate_id_video.mp4`, title: 'Corporate ID Video', description: 'Corporate identity showcase' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Corporate_Meetings/VID/corporate%20event%20video.mp4`, title: 'Corporate Celebration Video', description: 'Corporate celebration and ceremony video' }
          ]
        };
      case 'cultural':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/Anniversary.jpg`, title: 'Anniversary Celebration', description: 'Cultural anniversary celebration' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/School%20Anual%20day%206.jpeg`, title: 'Annual Day 6', description: 'School annual day celebration moment' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/School.jpeg`, title: 'School Event', description: 'General school event gathering' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/SchoolAnnualday.jpeg`, title: 'Annual Day', description: 'School annual day festivities' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/SchoolAnnualday2.jpeg`, title: 'Annual Day 2', description: 'School annual day performance' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/SchoolAnnualday4.jpeg`, title: 'Annual Day 4', description: 'School annual day stage event' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/SchoolAnual%20Day.jpeg`, title: 'Annual Day', description: 'School annual day celebration' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/SchoolAnualday1.jpeg`, title: 'Annual Day 1', description: 'School annual day cultural program' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/Schoolannualday5.jpeg`, title: 'Annual Day 5', description: 'School annual day student performance' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/Schoolannualday6.jpeg`, title: 'Annual Day 6', description: 'School annual day group photo' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/school-cultural.jpeg`, title: 'School Cultural', description: 'School cultural event' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Culturals/IMG/school1.jpeg`, title: 'School Gathering', description: 'School event gathering' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Culturals/VID/School%20events%20video.mp4`, title: 'School Events Video', description: 'Highlights from school events' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Culturals/VID/SchoolAnnual%20stage%20video.mp4`, title: 'Annual Stage Video', description: 'Annual day stage performances' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Culturals/VID/schoolstage.mp4`, title: 'School Stage', description: 'School stage event coverage' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Culturals/VID/schoolstage1.mp4`, title: 'School Stage 1', description: 'Extended school stage coverage' }
          ]
        };
      case 'wedding':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/SponserBoard.jpeg`, title: 'Sponsor Board', description: 'Wedding sponsor board display' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding%20Cart.jpeg`, title: 'Wedding Cart', description: 'Traditional wedding cart decoration' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding%20Cart1.jpeg`, title: 'Wedding Cart 1', description: 'Beautifully decorated wedding cart' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding%20Cart2.jpeg`, title: 'Wedding Cart 2', description: 'Elegant wedding cart setup' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding%20Horse.jpeg`, title: 'Wedding Horse', description: 'Traditional wedding horse' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding.jpeg`, title: 'Wedding Ceremony', description: 'Wedding ceremony moment' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Wedding2.jpeg`, title: 'Wedding Celebration', description: 'Wedding celebration event' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/WeddingDance.jpeg`, title: 'Wedding Dance', description: 'Wedding dance performance' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/WeddingDance2.jpeg`, title: 'Wedding Dance 2', description: 'Group wedding dance' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/WeddingDance3.jpeg`, title: 'Wedding Dance 3', description: 'Joyful wedding dance' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/WeddingTraditional%20music%202.jpeg`, title: 'Traditional Music 2', description: 'Traditional wedding music performance' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/WeddingTraditional%20music.jpeg`, title: 'Traditional Music', description: 'Traditional musicians at wedding' },
            { id: 13, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Weddingbride.jpeg`, title: 'Wedding Bride', description: 'Beautiful bride at the wedding' },
            { id: 14, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/Weddingcart3.jpeg`, title: 'Wedding Cart 3', description: 'Another view of wedding cart' },
            { id: 15, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/wedding1.jpeg`, title: 'Wedding Highlights', description: 'Highlights from the wedding' },
            { id: 16, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/wedding_lights5.jpeg`, title: 'Wedding Lights', description: 'Beautiful wedding lighting setup' },
            { id: 17, url: `${baseUrl}rk-photos/Gallery/Weddings/IMG/weddinglight6.jpeg`, title: 'Wedding Lights 2', description: 'Wedding venue lighting' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Weddings/VID/Wedding%20dance%20traditional%20video.mp4`, title: 'Traditional Dance Video', description: 'Traditional wedding dance video' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Weddings/VID/wedding%20banner%20video.mp4`, title: 'Wedding Banner Video', description: 'Wedding banner display video' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Weddings/VID/wedding_video.mp4`, title: 'Wedding Video', description: 'Wedding event video coverage' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Weddings/VID/wedding_video3.mp4`, title: 'Wedding Video 3', description: 'Additional wedding video footage' }
          ]
        };
      case 'birthday':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_cosplay.jpg`, title: 'Birthday Cosplay', description: 'Fun birthday cosplay event' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_1.jpg`, title: 'Birthday Decoration 1', description: 'Colorful birthday decoration' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_10.jpg`, title: 'Birthday Decoration 10', description: 'Themed birthday setup' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_11.jpg`, title: 'Birthday Decoration 11', description: 'Creative birthday decor' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_12.jpg`, title: 'Birthday Decoration 12', description: 'Beautiful birthday arrangement' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_2.jpg`, title: 'Birthday Decoration 2', description: 'Birthday party setup' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_3.jpg`, title: 'Birthday Decoration 3', description: 'Festive birthday decorations' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_4.jpg`, title: 'Birthday Decoration 4', description: 'Detailed birthday decor' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_5.jpg`, title: 'Birthday Decoration 5', description: 'Birthday celebration setup' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_6.jpg`, title: 'Birthday Decoration 6', description: 'Party decorations' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_7.jpg`, title: 'Birthday Decoration 7', description: 'Birthday event styling' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_8.jpg`, title: 'Birthday Decoration 8', description: 'Elegant birthday decor' },
            { id: 13, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_9.jpg`, title: 'Birthday Decoration 9', description: 'Theme-based decoration' },
            { id: 14, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_art.jpg`, title: 'Birthday Art', description: 'Artistic birthday decoration' },
            { id: 15, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_art_1.jpg`, title: 'Birthday Art 1', description: 'Creative birthday art' },
            { id: 16, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_kidsplay.jpg`, title: 'Kids Play Area', description: 'Kids play area decoration' },
            { id: 17, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_decoration_main.jpg`, title: 'Main Decoration', description: 'Main birthday stage decoration' },
            { id: 18, url: `${baseUrl}rk-photos/Gallery/Birthday/IMG/birthday_main.jpg`, title: 'Birthday Main', description: 'Birthday event highlight' }
          ],
          videos: []
        };
      case 'sports':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Mini%20games1.jpeg`, title: 'Mini Games 1', description: 'Fun mini games setup' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Mini%20games2.jpeg`, title: 'Mini Games 2', description: 'Interactive games for events' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigame12.jpeg`, title: 'Mini Game 12', description: 'Engaging mini game' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigame13.jpeg`, title: 'Mini Game 13', description: 'Exciting game activity' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigame14.jpeg`, title: 'Mini Game 14', description: 'Fun for all ages' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigame8.jpeg`, title: 'Mini Game 8', description: 'Game station' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames10.jpeg`, title: 'Mini Games 10', description: 'Group activity games' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames11.jpeg`, title: 'Mini Games 11', description: 'Team building games' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames15.jpeg`, title: 'Mini Games 15', description: 'Event entertainment' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames16.jpeg`, title: 'Mini Games 16', description: 'Party games' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames3.jpeg`, title: 'Mini Games 3', description: 'Kids games' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames4.jpeg`, title: 'Mini Games 4', description: 'Fun activities' },
            { id: 13, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames5.jpeg`, title: 'Mini Games 5', description: 'Game zone' },
            { id: 14, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames6.jpeg`, title: 'Mini Games 6', description: 'Entertainment corner' },
            { id: 15, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames7.jpeg`, title: 'Mini Games 7', description: 'Active games' },
            { id: 16, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames8.jpeg`, title: 'Mini Games 8', description: 'Skill games' },
            { id: 17, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames9.jpeg`, title: 'Mini Games 9', description: 'Competitive games' },
            { id: 18, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/Minigames_56.jpeg`, title: 'Mini Games 56', description: 'Large group games' },
            { id: 19, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/mini%20games.jpeg`, title: 'Mini Games Overview', description: 'Overview of mini games' },
            { id: 20, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/minigame%2067.jpeg`, title: 'Mini Game 67', description: 'Special game setup' },
            { id: 21, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/minigame_pottery.jpeg`, title: 'Pottery Game', description: 'Creative pottery activity' },
            { id: 22, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/minigames86.jpeg`, title: 'Mini Games 86', description: 'Fun game moment' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Mini_Games/VID/Minigamesvideo.mp4`, title: 'Mini Games Video', description: 'Mini games action' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Mini_Games/VID/Minigamesvideo2.mp4`, title: 'Mini Games Video 2', description: 'More mini games fun' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Mini_Games/VID/Minigamesvideo3.mp4`, title: 'Mini Games Video 3', description: 'Highlights of mini games' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Mini_Games/VID/minigame_video4.mp4`, title: 'Mini Game Video 4', description: 'Game participation' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Mini_Games/IMG/minigames6.mp4`, title: 'Mini Games Clip', description: 'Short clip of mini games' }
          ]
        };
      case 'decorations':
        return {
          images: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Decoration50.jpg`, title: 'Decoration 50', description: 'Elegant stage decoration' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Decorations123.jpg`, title: 'Decorations 123', description: 'Beautiful floral decoration' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Decorations456.jpg`, title: 'Decorations 456', description: 'Stunning stage setup' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stage%20Decoration.jpeg`, title: 'Stage Decoration', description: 'Classic stage decoration' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stage.jpeg`, title: 'Stage Setup', description: 'Professional stage setup' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/StageDecoration.jpeg`, title: 'Stage Decoration Main', description: 'Main stage decoration' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/StageDecoration1.jpeg`, title: 'Stage Decoration 1', description: 'Event stage decoration' },
            { id: 8, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stage_decoration11.jpeg`, title: 'Stage Decoration 11', description: 'Detailed stage decor' },
            { id: 9, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stagedecoration123.jpg`, title: 'Stage Decoration 123', description: 'Modern stage design' },
            { id: 10, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stagedecoration124.jpg`, title: 'Stage Decoration 124', description: 'Floral stage backdrop' },
            { id: 11, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/Stagedecoration125.jpg`, title: 'Stage Decoration 125', description: 'Grand stage decoration' },
            { id: 12, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/lights.jpg`, title: 'Stage Lights', description: 'Stage lighting setup' },
            { id: 13, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/stage_decoration%2066.jpeg`, title: 'Stage Decoration 66', description: 'Unique stage decor' },
            { id: 14, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/stagestatue.jpeg`, title: 'Stage Statue', description: 'Stage statue decoration' },
            { id: 15, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/IMG/stagestatue1.jpeg`, title: 'Stage Statue 1', description: 'Artistic stage statue' }
          ],
          videos: [
            { id: 1, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage%20Decoration%20Video.mp4`, title: 'Stage Decoration Video', description: 'Video tour of stage decoration' },
            { id: 2, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage%20Decoration%20Video3.mp4`, title: 'Stage Decoration Video 3', description: 'Stage decoration highlights' },
            { id: 3, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage%20Decoration%20Video4.mp4`, title: 'Stage Decoration Video 4', description: 'More stage decoration' },
            { id: 4, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage%20decoration%20video%202.mp4`, title: 'Stage Decoration Video 2', description: 'Stage setup video' },
            { id: 5, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage%20video.mp4`, title: 'Stage Video', description: 'Overall stage video' },
            { id: 6, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/Stage_decorationvideo99.mp4`, title: 'Stage Decoration 99', description: 'Special stage decoration video' },
            { id: 7, url: `${baseUrl}rk-photos/Gallery/Stage_Decoration/VID/stage_decoration_video.mp4`, title: 'Stage Decoration Video', description: 'Stage decor showcase' }
          ]
        };
      default:
        return {
          images: [
            { id: 1, url: service.image, title: service.title, description: service.description }
          ],
          videos: []
        };
    }
  };

  const media = getServiceMedia(service.category);
  const currentMedia = activeTab === 'images' ? media.images : media.videos;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % currentMedia.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative min-h-screen flex items-center justify-center p-4 pt-16">
        <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[80vh] flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-maroon-800 to-maroon-600 text-white p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-xl font-bold">{service.title}</h2>
                <p className="text-maroon-100 text-sm">{service.description}</p>
              </div>
              <button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-gray-100 p-3 flex-shrink-0">
            <div className="flex space-x-3">
              <button
                onClick={() => setActiveTab('images')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${activeTab === 'images'
                  ? 'bg-maroon-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                Images ({media.images.length})
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${activeTab === 'videos'
                  ? 'bg-maroon-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
              >
                Videos ({media.videos.length})
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {currentMedia.length > 0 ? (
              <div className="space-y-4">
                {/* Main Image/Video Display */}
                <div className="relative bg-gray-100 rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    {activeTab === 'images' ? (
                      <img
                        src={currentMedia[selectedImage].url}
                        alt={currentMedia[selectedImage].title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <video
                        src={currentMedia[selectedImage].url}
                        controls
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}

                    {/* Navigation Arrows */}
                    {currentMedia.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image/Video Info */}
                  <div className="p-3">
                    <h3 className="font-semibold text-base mb-1">{currentMedia[selectedImage].title}</h3>
                    <p className="text-gray-600 text-sm">{currentMedia[selectedImage].description}</p>
                    <div className="mt-1 text-xs text-gray-500">
                      {selectedImage + 1} of {currentMedia.length}
                    </div>
                  </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {currentMedia.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => setSelectedImage(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                        ? 'border-maroon-500 scale-105'
                        : 'border-gray-200 hover:border-maroon-300'
                        }`}
                    >
                      <div className="aspect-video relative">
                        {activeTab === 'images' ? (
                          <img
                            src={item.url}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Play className="h-6 w-6 text-gray-500" />
                          </div>
                        )}
                        {activeTab === 'videos' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Play className="h-4 w-4 text-white bg-black/50 rounded-full p-1" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No {activeTab} available for this service.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 bg-white p-4 flex-shrink-0">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm font-medium">Interested in {service.title}?</p>
                <p className="text-xs text-gray-500">Get a personalized quote today</p>
              </div>
              <a
                href={`https://wa.me/919710916687?text=Hi! I'm interested in ${service.title} for my event. Please provide me with a quote and more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center text-sm"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.382" />
                </svg>
                WhatsApp Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGalleryModal;