"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailEntity = void 0;
const typeorm_1 = require("typeorm");
let MailEntity = class MailEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MailEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'destination_name', nullable: false }),
    __metadata("design:type", String)
], MailEntity.prototype, "destinationName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'destination_address', nullable: false }),
    __metadata("design:type", String)
], MailEntity.prototype, "destinationAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'due_date', type: 'timestamp', nullable: false }),
    __metadata("design:type", String)
], MailEntity.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], MailEntity.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], MailEntity.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MailEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], MailEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], MailEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], MailEntity.prototype, "deletedAt", void 0);
MailEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'mails' })
], MailEntity);
exports.MailEntity = MailEntity;
//# sourceMappingURL=mail.entity.js.map