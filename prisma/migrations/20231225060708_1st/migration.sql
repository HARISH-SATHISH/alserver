/*
  Warnings:

  - You are about to drop the column `published` on the `Blog` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Log` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Blog" DROP COLUMN "published";

-- AlterTable
ALTER TABLE "Log" DROP COLUMN "published";
