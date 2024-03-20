'use client'
import React from 'react';
import { type jobType } from '~/lib/types';
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

  return nonEmptyParagraphs
}



export default JobCard