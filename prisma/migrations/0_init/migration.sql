-- CreateTable
CREATE TABLE `admin_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NULL DEFAULT 'NAMELESS',
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `series_id` VARCHAR(60) NULL,
    `remember_token` VARCHAR(255) NULL,
    `expires` DATETIME(0) NULL,
    `user_type` VARCHAR(15) NOT NULL,
    `gender` ENUM('MALE', 'FEMALE', 'OTHER') NULL,
    `manager` INTEGER NULL,
    `added_by` INTEGER NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `artist_skills` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `skill` VARCHAR(45) NOT NULL,

    UNIQUE INDEX `unique`(`user_id`, `skill`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(45) NOT NULL,
    `gender` VARCHAR(6) NULL,
    `address` VARCHAR(100) NULL,
    `city` VARCHAR(15) NULL,
    `state` VARCHAR(30) NULL,
    `phone` VARCHAR(15) NULL,
    `email` VARCHAR(75) NOT NULL,
    `date_of_birth` DATE NULL,
    `created_at` TIMESTAMP(0) NULL,
    `updated_at` TIMESTAMP(0) NULL,

    UNIQUE INDEX `unique_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lyrics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `lyricist` INTEGER NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 1,
    `lyrics` TEXT NOT NULL,
    `length` VARCHAR(10) NULL,
    `status` ENUM('SUBMITTED', 'APPROVED', 'REJECTED') NULL DEFAULT 'SUBMITTED',
    `updated_by` INTEGER NULL,
    `comments` TEXT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `lyricist`(`lyricist`),
    UNIQUE INDEX `order`(`order_id`, `version`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `customer_id` INTEGER NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `status` ENUM('NEW', 'IN_PRODUCTION', 'READY', 'DELIVERED', 'REJECTED') NULL DEFAULT 'NEW',
    `requirements` TEXT NULL,
    `language` VARCHAR(45) NULL,
    `gender_preference` VARCHAR(25) NULL,
    `song_manager` INTEGER NULL DEFAULT 0,
    `lyricist` INTEGER NULL DEFAULT 0,
    `lyrics_due` DATE NULL,
    `composer` INTEGER NULL DEFAULT 0,
    `comp_due` DATE NULL,
    `vocalist` INTEGER NULL DEFAULT 0,
    `vocal_due` DATE NULL,
    `beat` INTEGER NULL DEFAULT 0,
    `beat_due` DATE NULL,
    `mixer` INTEGER NULL DEFAULT 0,
    `mix_due` DATE NULL,
    `rating` VARCHAR(5) NULL,
    `lyrics_rating` VARCHAR(5) NULL,
    `music_rating` VARCHAR(5) NULL,
    `delivery_date` DATETIME(0) NULL,

    INDEX `artist`(`vocalist`),
    INDEX `composer`(`composer`),
    INDEX `customer`(`customer_id`),
    INDEX `lyricist`(`lyricist`),
    INDEX `manager`(`song_manager`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `production_track` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `artist` INTEGER NOT NULL,
    `type` ENUM('COMPOSITION', 'BEAT', 'VOCAL', 'MIXING', 'FINAL') NOT NULL,
    `version` INTEGER NOT NULL DEFAULT 1,
    `file_url` VARCHAR(2000) NOT NULL,
    `length` VARCHAR(10) NULL,
    `status` ENUM('SUBMITTED', 'APPROVED', 'REJECTED') NULL DEFAULT 'SUBMITTED',
    `updated_by` INTEGER NULL,
    `comments` TEXT NULL,
    `downloads` INTEGER NULL DEFAULT 0,
    `token` VARCHAR(255) NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `artist`(`artist`),
    INDEX `order`(`order_id`, `type`, `version`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_accounts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `series_id` VARCHAR(60) NULL,
    `remember_token` VARCHAR(255) NULL,
    `expires` DATETIME(0) NULL,
    `user_type` VARCHAR(10) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `wix_inbound` (
    `_id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `data` TEXT NULL,
    `processed` TINYINT NULL DEFAULT 0,

    PRIMARY KEY (`_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

