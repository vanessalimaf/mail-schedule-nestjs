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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendgridController = void 0;
const common_1 = require("@nestjs/common");
const sendgrid_service_1 = require("./service/sendgrid.service");
let SendgridController = class SendgridController {
    constructor(sendgridService) {
        this.sendgridService = sendgridService;
    }
    sendEmail(body) {
        return this.sendgridService.sendEmail(body);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SendgridController.prototype, "sendEmail", null);
SendgridController = __decorate([
    (0, common_1.Controller)('api/v1/sendgrid'),
    __metadata("design:paramtypes", [sendgrid_service_1.SendgridService])
], SendgridController);
exports.SendgridController = SendgridController;
//# sourceMappingURL=sendgrid.controller.js.map