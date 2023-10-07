-- MySQL Script generated by MySQL Workbench
-- Fri Oct  6 19:16:20 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_ecommmerce_laptop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_ecommmerce_laptop
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `db_ecommmerce_laptop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `db_ecommmerce_laptop` ;

-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_categoria` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `marca` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(255) NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_producto` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` FLOAT NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `imagen` VARCHAR(255) NOT NULL,
  `fecha` DATE NOT NULL,
  `stock` INT(5) NOT NULL,
  `id_categoria` INT NOT NULL,
  PRIMARY KEY (`id_productos`),
  INDEX `fk_tbl_producto_tbl_categoria_idx` (`id_categoria` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `direccion` VARCHAR(100) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  `telefono` INT(12) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT(5) NOT NULL,
  `direccion_compra` VARCHAR(255) NOT NULL,
  `direccion_pedido` VARCHAR(255) NOT NULL,
  `fecha_pedido` DATE NOT NULL,
  `estado_pedido` VARCHAR(45) NOT NULL,
  `metodo_entrega` VARCHAR(45) NOT NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  INDEX `fk_tbl_pedido_tbl_cliente1_idx` (`id_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_pago` (
  `id_pago` INT NOT NULL AUTO_INCREMENT,
  `numero_factura` INT(15) NOT NULL,
  `fecha_factura` DATE NOT NULL,
  `metodo_pago` VARCHAR(15) NOT NULL,
  `estado_pago` VARCHAR(20) NOT NULL,
  `direccion_envio` VARCHAR(15) NOT NULL,
  `subtotal` FLOAT NOT NULL,
  `igv` FLOAT NOT NULL,
  `total` INT NOT NULL,
  `notas` VARCHAR(255) NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_pago`),
  INDEX `fk_tbl_pago_tbl_cliente1_idx` (`id_cliente` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_ecommmerce_laptop`.`tbl_producto_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_ecommmerce_laptop`.`tbl_producto_pedido` (
  `id_producto_pedido` INT(5) NOT NULL AUTO_INCREMENT,
  `id_pedido` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad_pedido_producto` INT(5) NOT NULL,
  PRIMARY KEY (`id_producto_pedido`),
  INDEX `fk_tbl_pedido_has_tbl_producto_tbl_producto1_idx` (`id_producto` ASC) VISIBLE,
  INDEX `fk_tbl_pedido_has_tbl_producto_tbl_pedido1_idx` (`id_pedido` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
