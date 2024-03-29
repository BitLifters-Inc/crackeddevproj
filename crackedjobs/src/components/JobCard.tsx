'use client'
import React, { useState } from 'react';
import { type jobType } from '~/lib/types';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { cn } from '~/lib/utils';

type TJobDescription = string | undefined 



const JobCard: React.FC<jobType> = (job: jobType, className: string) => {

  

  return (
    <Card className = {cn(className, '')}>
      <CardHeader>
        <CardTitle>
          <h1 className = "text-xl">
            {job.title} 
          </h1>
        </CardTitle>
        <Badge>{job.max_payment_usd}</Badge>
        
        <CardDescription>
          {formatText(job.description)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

function formatText(description: TJobDescription) {
  const paragraphs = description?.replace(/-/g, '\n').split('\n')

  const trimmedParagraphs = paragraphs?.map(paragraph => paragraph.trim())

  const nonEmptyParagraphs = trimmedParagraphs?.filter(paragraph => paragraph !== '')

  return parseJobDescription(nonEmptyParagraphs);
}

function parseJobDescription(description: string): string[] {
  const sections: string[] = [];
  
  // Extracting sections based on the keywords
  const regex = /(# Job Description ✨|Key Responsibilities:|Qualifications:|Compensation:|Expectations:)(.*?)(?=#|$)/gs;
  let match;
  while ((match = regex.exec(description)) !== null) {
      sections.push(match[0].trim());
  }
  
  return sections;
}



export default JobCard