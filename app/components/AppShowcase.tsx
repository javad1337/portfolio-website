'use client';



interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	platforms: string[];
	downloads: string;
	rating: number;
    androidLink: string,
    iosLink:string,

}




const apps: App[] = [
	{
		id: 1,
		name: 'PsyAtlas',
		description: 'Linking symptoms with their mental causes and finding ways for cause resolution.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
		platforms: ['iOS', 'Android'],
		downloads: '100+',
		rating: 4.8,
        androidLink: "",
        iosLink:"",
	},
	{
		id: 2,
		name: 'Joypolis',
		description: 'Loyalty application for the Joypolis entertainment center',
		technologies: ['Flutter', 'Dart', 'Firebase'],
		platforms: ['iOS', 'Android'],
		downloads: '100+',
		rating: 4.7,
        androidLink: "https://play.google.com/store/apps/details?id=com.business.joypolis_app",
        iosLink:"https://apps.apple.com/us/app/joypolis/id6740851423",
	},
];

import React from 'react';

// Apple App Store Button Component
interface AppStoreButtonProps {
    onClick?: () => void;
    href?: string;
    className?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({
                                                           onClick,
                                                           href,
                                                           className = ''
                                                       }) => {
    const buttonContent = (
        <div className={`
      inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 
      bg-black text-white rounded-lg border border-gray-300
      hover:bg-gray-800 transition-colors cursor-pointer
      min-h-[56px] max-w-[180px] sm:max-w-none
      ${className}
    `}>
            {/* Apple Logo */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7 fill-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
            </div>
            <div className="flex flex-col items-start min-w-0 flex-1">
                <span className="text-[10px] sm:text-xs leading-none whitespace-nowrap">Download on the</span>
                <span className="text-sm sm:text-lg font-semibold leading-tight whitespace-nowrap">App Store</span>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick} className="inline-block">
                {buttonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {buttonContent}
        </button>
    );
};

// Google Play Store Button Component
interface PlayStoreButtonProps {
    onClick?: () => void;
    href?: string;
    className?: string;
}

const PlayStoreButton: React.FC<PlayStoreButtonProps> = ({
                                                             onClick,
                                                             href,
                                                             className = ''
                                                         }) => {
    const buttonContent = (
        <div className={`
      inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 
      bg-black text-white rounded-lg border border-gray-300
      hover:bg-gray-800 transition-colors cursor-pointer
      min-h-[56px] max-w-[180px] sm:max-w-none
      ${className}
    `}>
            {/* Google Play Logo */}
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
                     id="GooglePlay" className="w-5 h-5 sm:w-7 sm:h-7">
                    <path fill="#fbbc05"
                          d="m23 12c0 .75-.42 1.41-1.03 1.75l-5.2 2.89-4.4-4.64 4.4-4.64 5.2 2.89c.61.34 1.03 1 1.03 1.75z"
                          className="colorffc107 svgShape"/>
                    <path fill="#4285f4" d="m12.37 12-10.8 11.39c-.36-.36-.57-.85-.57-1.39v-20c0-.54.21-1.03.57-1.39z"
                          className="color03a9f4 svgShape"/>
                    <path fill="#ea4335" d="m12.37 12 4.4 4.64-12.8 7.11c-.29.16-.62.25-.97.25-.56 0-1.07-.23-1.43-.61z"
                          className="colorf44336 svgShape"/>
                    <path fill="#34a853" d="m16.77 7.36-4.4 4.64-10.8-11.39c.36-.38.87-.61 1.43-.61.35 0 .68.09.97.25z"
                          className="color4caf50 svgShape"/>
                </svg>
            </div>
            <div className="flex flex-col items-start min-w-0 flex-1">
                <span className="text-[10px] sm:text-xs leading-none whitespace-nowrap">GET IT ON</span>
                <span className="text-sm sm:text-lg font-semibold leading-tight whitespace-nowrap">Google Play</span>
            </div>
        </div>
    );

    if (href) {
        return (
            <a href={href} onClick={onClick} className="inline-block">
                {buttonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {buttonContent}
        </button>
    );
};

export { AppStoreButton, PlayStoreButton };

// Demo Component
const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Featured Apps</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<div key={app.id} className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1">
							<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
											{app.id === 1 ? (
												<svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
                                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>

												</svg>
											) : (
												<svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
													/>
												</svg>
											)}
											{/* Animated Glow Effect */}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
										</div>
										{/* Corner Decorations */}
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
										<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">{app.name}</h3>
											<span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
												{app.id === 1 ? 'Featured' : 'New'}
											</span>
										</div>
										<p className="text-gray-400 mb-4 text-center sm:text-left">{app.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
											{app.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50 group-hover:border-gray-600/50 group-hover:text-gray-300 transition-colors whitespace-nowrap"
												>
													{tech}
												</span>
											))}
										</div>
										<div className="flex gap-6">
											<AppStoreButton className="transform hover:scale-105"
															href={app.iosLink}
											/>

											<PlayStoreButton className="transform hover:scale-105"
                                                             href={app.androidLink}
											/>
										</div>


										{/*<div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-400">
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
												</svg>
												<span>{app.rating}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03M19,18H6A4,4 0 0,1 2,14C2,11.95 3.53,10.24 5.56,10.03L6.63,9.92L7.13,8.97C8.08,7.14 9.94,6 12,6C14.62,6 16.88,7.86 17.39,10.43L17.69,11.93L19.22,12.04C20.78,12.14 22,13.45 22,15A3,3 0 0,1 19,18M8,13H10.55V16H13.45V13H16L12,9L8,13Z" />
												</svg>
												<span>{app.downloads}</span>
											</div>
											<div className="flex items-center gap-1.5">
												<svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
													<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
												</svg>
												<span>{app.platforms.join(' & ')}</span>
											</div>
										</div>*/}

									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;