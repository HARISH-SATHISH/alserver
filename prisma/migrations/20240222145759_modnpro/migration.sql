-- CreateTable
CREATE TABLE "Mods" (
    "id" SERIAL NOT NULL,
    "pass" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Mods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "modId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_modId_fkey" FOREIGN KEY ("modId") REFERENCES "Mods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
