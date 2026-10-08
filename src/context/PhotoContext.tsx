import React, { createContext, useContext, useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/profileData';

interface PhotoContextType {
  photoSrc: string;
  updatePhoto: (newPhoto: string) => void;
  resetPhoto: () => void;
}

const PhotoContext = createContext<PhotoContextType>({
  photoSrc: PROFILE_DATA.photoUrl,
  updatePhoto: () => {},
  resetPhoto: () => {}
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('ana_carrillo_custom_photo');
      return saved || PROFILE_DATA.photoUrl;
    } catch {
      return PROFILE_DATA.photoUrl;
    }
  });

  const updatePhoto = (newPhoto: string) => {
    setPhotoSrc(newPhoto);
    try {
      localStorage.setItem('ana_carrillo_custom_photo', newPhoto);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  };

  const resetPhoto = () => {
    setPhotoSrc(PROFILE_DATA.photoUrl);
    try {
      localStorage.removeItem('ana_carrillo_custom_photo');
    } catch (e) {
      console.warn('Could not remove from localStorage', e);
    }
  };

  return (
    <PhotoContext.Provider value={{ photoSrc, updatePhoto, resetPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const useProfilePhoto = () => useContext(PhotoContext);
