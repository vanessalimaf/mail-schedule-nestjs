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
exports.SendgridService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let SendgridService = class SendgridService {
    constructor(httpService) {
        this.httpService = httpService;
        this.SENDGRID_API_URL = process.env.SENDGRID_API_URL;
        this.SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    }
    async sendEmail(data) {
        const url = `${this.SENDGRID_API_URL}/mail/send`;
        const config = {
            headers: {
                Authorization: `Bearer ${this.SENDGRID_API_KEY}`,
            },
        };
        const response = await (0, rxjs_1.lastValueFrom)(this.httpService.post(url, data, config));
        console.log(response.data);
        return response.status === common_1.HttpStatus.ACCEPTED;
    }
};
SendgridService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SendgridService);
exports.SendgridService = SendgridService;
//# sourceMappingURL=sendgrid.service.js.map