import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { AppError } from "../errors/AppError"
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"


class AnswerController {

    // http://localhost:3333/answers/3?u=b30dabff-3163-4187-910c-3f494c4ce9f7
    /**
    Router Params => Parametros que compõe a rota
    routes.get("/answers/:value")

    Query Params => Busca, Paginação, não obrigatórios
    ?
    chave=valor
    */

    async excute(request: Request, response: Response) {

        const { value } = request.params
        const { u } = request.query

        console.log(u)

        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveyUsersRepository.findOne({
            id: String(u)
        })

        if(!surveyUser) {
            throw new AppError("Survey User does not exists")
        }

        surveyUser.value = Number(value)

        await surveyUsersRepository.save(surveyUser)

        return response.json(surveyUser)

    }

}

export { AnswerController }