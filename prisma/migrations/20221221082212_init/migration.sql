-- CreateTable
CREATE TABLE `account` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `series_id` VARCHAR(60) NULL,
    `remember_token` VARCHAR(255) NULL,
    `expires` DATETIME(0) NULL,
    `user_type` VARCHAR(10) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user_name`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `gender` VARCHAR(6) NULL,
    `address` VARCHAR(100) NULL,
    `city` VARCHAR(15) NULL,
    `state` VARCHAR(30) NULL,
    `phone` VARCHAR(15) NULL,
    `email` VARCHAR(50) NULL,
    `date_of_birth` DATE NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `user_info_user_id_key`(`user_id`),
    INDEX `user_info_user_id_idx`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
