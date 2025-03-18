import { Injectable } from '@angular/core';

export interface Section {
  id: string;
  title: string;
  items: (string | SubSection)[];
}

export interface SubSection {
  subtitle: string;
  items: string[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getSections(): Section[] {
    return [
      {
        id: '1',
        title: 'Things Every Man Should Have',
        items: [
          {
            subtitle: 'i. Wardrobe Essentials',
            items: [
              'Well-fitted suit (at least one)',
              'Crisp white dress shirt',
              'Classic leather shoes (black & brown)',
              'Casual sneakers',
              'A high-quality wristwatch',
              'A durable leather belt',
              'Dark wash jeans',
              'A versatile blazer',
              'A comfortable hoodie',
              'Sunglasses that suit your face',
              'A stylish yet functional wallet',
            ],
          },
          {
            subtitle: 'ii. Grooming & Fragrances',
            items: [
              'Signature cologne (fresh, woody, or musky scent)',
              'Quality razor and shaving kit',
              'Skincare routine (moisturizer & sunscreen)',
              'Deodorant and body spray',
              'Beard trimmer (if you keep facial hair)',
              'A good haircut/style that suits your face',
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Books Every Man Must Read',
        items: [
          '"The 48 Laws of Power" – Robert Greene',
          '"How to Win Friends and Influence People" – Dale Carnegie',
          '"The Subtle Art of Not Giving a F*ck" – Mark Manson',
          '"Think and Grow Rich" – Napoleon Hill',
          '"Meditations" – Marcus Aurelius',
          '"The Art of War" – Sun Tzu',
          '"Atomic Habits" – James Clear',
          '"Can\'t Hurt Me" – David Goggins',
        ],
      },
      {
        id: '3',
        title: 'Movies, Web Series & Documentaries Every Man Must Watch',
        items: [
          'Movies: The Godfather, Fight Club, Gladiator, The Dark Knight, Braveheart, Scarface',
          'Web Series: Peaky Blinders, Suits, Breaking Bad, Mad Men',
          'Documentaries: The Last Dance, Free Solo, The Social Dilemma',
        ],
      },
      {
        id: '4',
        title: 'Skills Every Man Must Have',
        items: [
          'Basic self-defense',
          'Cooking at least 5 good meals',
          'Changing a tire',
          'Managing finances & investments',
          'Public speaking & communication',
          'Negotiation skills',
          'Swimming & basic survival techniques',
          'Fixing things around the house (plumbing, wiring, etc.)',
          'First aid & CPR knowledge',
          'Driving both manual & automatic cars',
          'Time management & productivity skills',
        ],
      },
      {
        id: '5',
        title: 'Hobbies Every Man Must Have',
        items: [
          'Strength training or martial arts',
          'Reading & self-education',
          'Traveling to new places',
          'Playing a musical instrument',
          'Hiking or outdoor adventures',
          'Photography or videography',
          'Cooking or mixology',
          'DIY projects & craftsmanship',
          'Writing or journaling',
        ],
      },
      {
        id: '6',
        title: 'Rules & Ideologies Every Man Must Follow',
        items: [
          'Always keep your word',
          'Stay physically and mentally fit',
          'Be financially responsible',
          'Respect women & set high standards for relationships',
          'Stand by your principles',
          'Keep learning and evolving',
          'Take responsibility for your actions',
          'Never stop improving your mindset & discipline',
        ],
      },
      {
        id: '7',
        title: 'Things Every Man Must Do in Life',
        items: [
          'Travel solo at least once',
          'Learn to fight (self-defense or martial arts)',
          'Build a side hustle or business',
          'Go on a road trip with friends',
          'Mentor someone younger',
          'Experience love, heartbreak, and growth',
          'Help others without expecting anything in return',
          'Learn a new language',
          'Own something valuable (property, investment, or business)',
          'Have a personal mission & vision',
        ],
      },
      {
        id: '8',
        title: 'Survival & Emergency Essentials Every Man Must Have',
        items: [
          {
            subtitle: 'i. Everyday Carry (EDC) Essentials',
            items: [
              'Multi-tool or Swiss Army knife',
              'Pocket flashlight',
              'Lighter or waterproof matches',
              'Tactical pen',
              'Emergency whistle',
              'Power bank',
              'Compact first aid kit',
              'Pepper spray',
            ],
          },
          {
            subtitle: 'ii. Home Emergency Kit',
            items: [
              'Fully stocked first aid kit',
              'Bottled water supply (at least 3 days’ worth)',
              'Non-perishable food',
              'Flashlights & extra batteries',
              'Emergency radio',
              'Fire extinguisher',
              'Basic toolkit',
              'Cash stash',
            ],
          },
          {
            subtitle: 'iii. Survival & Outdoor Gear',
            items: [
              'Survival knife',
              'Paracord bracelet',
              'Thermal emergency blanket',
              'Portable water filter',
              'Compass & physical map',
              'Tactical gloves & boots',
              'Tent or sleeping bag',
              'Self-defense weapon (depending on laws)',
            ],
          },
          {
            subtitle: 'iv. Car Emergency Kit',
            items: [
              'Spare tire & tire repair kit',
              'Jumper cables',
              'Portable air compressor',
              'Tow rope',
              'Emergency flare or reflective triangles',
              'Multi-tool & duct tape',
              'Blanket & extra clothing',
              'Non-perishable snacks & water',
            ],
          },
          {
            subtitle: 'v. Urban Survival & Disaster Preparedness',
            items: [
              'Bug-out bag (Go Bag)',
              'Gas mask or respirator',
              'Self-defense skills & tools',
              'Emergency contacts list',
              'Escape plan (safe zones & exit routes)',
              'Copies of important documents (physical & digital)',
            ],
          },
          {
            subtitle: 'vi. Mental & Physical Preparedness',
            items: [
              'Basic first aid knowledge',
              'Fire-starting skills',
              'Navigation without GPS',
              'Self-defense training',
              'Basic shelter-building skills',
              'Situational awareness',
              'Emergency mindset (staying calm under pressure)',
            ],
          },
        ],
      },
    ];
  }

  constructor() {}
}
