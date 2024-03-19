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



const JobCard: React.FC<jobType> = (job: jobType) => {

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1>
            {job.title} 
          </h1>
        </CardTitle>

      </CardHeader>
    </Card>
  );
};


export default JobCard