import { Card } from '@/shared/ui/card';
import { Separator } from '@/shared/ui/separator';
import { Skeleton } from '@/shared/ui/skeleton';

export const RecipePageLoading = () => {
    return (
        <div className="grid grid-cols-4 gap-3 mt-3">
            <div className="flex flex-col gap-3 col-span-1">
                <Card className="w-full justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Кухня
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>

                <Card className="w-full justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Теги
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>

                <Card className="w-full justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Калорийность
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4 flex flex-col gap-2">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>

                <Card className="w-full  justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Количество порций
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>

                <Card className="w-full flex-1  justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Описание
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>
            </div>
            <div className="flex flex-col gap-3 col-span-1">
                <Card className="w-full  justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Общее время приготовления
                        </span>
                    </div>
                    <Separator />
                    <div className="px-6 py-4">
                        <Skeleton>
                            <span className="text-black/0 text-base font-normal leading-normal">
                                Кухня
                            </span>
                        </Skeleton>
                    </div>
                </Card>
                <Card className="w-full flex-1  justify-start items-start inline-flex flex-col">
                    <div className="px-6 py-4">
                        <span className="text-black/90 text-base font-medium leading-normal">
                            Инструкции по приготовлению
                        </span>
                    </div>
                    <Separator />
                    <Skeleton className="w-full h-96"/>
                </Card>
            </div>
            <div className="col-span-2">
                <Skeleton className="w-full h-full"/>
            </div>
        </div>
    );
};
