-- CreateTable
CREATE TABLE "schools" (
    "id" SERIAL NOT NULL,
    "school_name" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "phone" TEXT,

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);
