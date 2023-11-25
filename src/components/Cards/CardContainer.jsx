"use client";

import React, {useContext} from 'react';
import { Card } from './Card';
import { NoteContext } from '@/Provider/Provider';
import { Indicator } from '../Indicator/Indicator';

export const CardContainer = ({ items }) => {
  const {filter} = useContext(NoteContext)
  
  const filteredItems = items.filter((content) => {
    switch (filter) {
      case 'all': return true;
      case 'active': return content.additionalData === 'todo';
      case 'completed': return content.additionalData === 'done';
      default: return true;
    }
  });

  return (
    <>
      {filteredItems.map((filteredContent, index) => (
        <Card key={filteredContent.id} content={filteredContent} id={filteredContent.id} index={index} />
      ))}
      {items.length > 0 ? (
        <Indicator content={items} />
      ) : (
        <></>
      )}
    </>
  );
};
