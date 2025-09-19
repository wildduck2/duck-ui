import { createTRPCRouter, publicProcedure } from '../globals'
import { insertFileSchema } from './index'
import {
  deleteBucketSchema,
  deleteFileSchema,
  deleteFolderSchema,
  getBucketSchema,
  getBucketsSchema,
  getFolderSchema,
  insertBucketSchema,
  insertFolderSchema,
} from './upload.dto'
import { UploadService } from './upload.service'

export const uploadRouter = createTRPCRouter({
  // NOTE: DELETERs
  deleteBucket: publicProcedure
    .input(deleteBucketSchema)
    .mutation(async ({ input }) => await UploadService.deleteBucket(input)),
  deleteFile: publicProcedure
    .input(deleteFileSchema)
    .mutation(async ({ input }) => await UploadService.deleteFile(input)),
  deleteFolder: publicProcedure
    .input(deleteFolderSchema)
    .mutation(async ({ input }) => await UploadService.deleteFolder(input)),
  getBucket: publicProcedure.input(getBucketSchema).query(async ({ input }) => await UploadService.getBucket(input)),
  // NOTE: GETTTERs
  getBuckets: publicProcedure.input(getBucketsSchema).query(async ({ input }) => await UploadService.getBuckets(input)),
  getFolder: publicProcedure.input(getFolderSchema).query(async ({ input }) => await UploadService.getFolder(input)),

  // NOTE: INSERTERs
  insertBucket: publicProcedure
    .input(insertBucketSchema)
    .mutation(async ({ input }) => await UploadService.insertBucket(input)),
  insertFile: publicProcedure
    .input(insertFileSchema)
    .mutation(async ({ input }) => await UploadService.insertFile(input)),
  //
  insertFolder: publicProcedure
    .input(insertFolderSchema)
    .mutation(async ({ input }) => await UploadService.insertFolder(input)),

  // NOTE: UPDATERs
  updateBucket: publicProcedure
    .input(insertBucketSchema)
    .mutation(async ({ input }) => await UploadService.updateBucket(input)),
  updateFile: publicProcedure
    .input(insertFileSchema)
    .mutation(async ({ input }) => await UploadService.updateFile(input)),
  updateFolder: publicProcedure
    .input(insertFolderSchema)
    .mutation(async ({ input }) => await UploadService.updateFolder(input)),
})
